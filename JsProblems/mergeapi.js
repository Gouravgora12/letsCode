let {moment} = utility;
(async function registerAccount() {
    try {
        let AccountData = req.body.Organisation;
        let productID;
       
		if(AccountData &&  AccountData.productID){
           productID=AccountData.productID.$oid
            AccountData.PartnerMembershipType=AccountData.productID
        }
        else{
           productID = AccountData.CorporateMembershipType.$oid
        }
        let ProductParam = {
                apiname: "/customapi/getProductDetailById",
                data: {productID}
            };
        let Product = await utility.AccessOptimiserApi(req, ProductParam, db);
        if(Product.data.AccountType==1){
            AccountData.CorporateAnnualFee = {
                "$numberDecimal": Product.data.Price.$numberDecimal
            }
            let Duration = Product.data.Duration;
      	    let DurationType = Product.data.DurationType.toLowerCase();
            let MembershipEnd = moment(AccountData.MembershipStartDate.$date).add(Duration, DurationType).format('YYYY-MM-DD') + 'T00:00:00.000Z';
            AccountData.MembershipEndDate = {
                "$date": MembershipEnd
            }
        }
      	let DefaultAccountOwner = Product.data.DefaultAccountOwner;
        let DefaultContactOwner = Product.data.DefaultContactOwner;
      	let DefaultAccountOwnerEmail = Product.data.DefaultAccountOwner_LookupData.Email;
      	let DefaultContactOwnerEmail = Product.data.DefaultContactOwner_LookupData.Email
       
      	AccountData.OwnerID = {
			"$oid": DefaultAccountOwner
		}
        let accountParam = {
            apiname: "addobjectdata",
            data: {
                "collection": "Account",
                "fields": AccountData
            }
        };
        let accountResult = await utility.AccessOptimiserApi(req, accountParam, db);
      	let AccountId = accountResult.data._id
        let ContactData = req.body.Contacts;
      	ContactData.forEach((d)=>{
			d.OwnerID = {"$oid" : DefaultContactOwner},
            d.AccountID = {"$oid" : AccountId}
		})
      
		let contactSavedWithPass = [];
        for(let i=0;i<ContactData.length ;i++) {
            if(!ContactData[i]._id){

                let ContactParam = {
                    apiname: "addobjectdata",
                    data: {
                        "collection": "Contact",
                        "fields": ContactData[i]
                    }
                };
                  
                let contactResult = await utility.AccessOptimiserApi(req, ContactParam, db);
                   let userPassword = '';
                let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
                for (j = 1; j <= 8; j++) {
                    let char = Math.floor(Math.random() * str.length + 1);
                    userPassword += str.charAt(char);
                }
                let contactPass = {};
                  contactPass = {
                    TPFirstName : ContactData[i].FirstName,
                      TPLastName : ContactData[i].LastName,
                      TPEmail : ContactData[i].Email,
                    Password : userPassword,
                      _id : contactResult.data._id
                }
                let tpcontactparam = {
                  "fields": contactPass,
                  "collection": "Website Members",
                  };
                req.body = tpcontactparam;
                let contactSaved = await utility.SaveCollectionRecord(req, db);
                  contactSavedWithPass.push(contactSaved)
    
              let accountcontactParam = {
                apiname: "addobjectdata",
                data: {
                  "collection": "AccountContactRelation",
                  "fields": {
                    "AccountID": {
                      $oid: AccountId
                    },
                    "IsKeyContact": ContactData[i].IsKeyContact ? ContactData[i].IsKeyContact : null,
                    "IsInternal": true,
                    "IsWorking": true,
                    "IsDefaultRecord": true,
                    "ContactID": {
                      $oid: contactResult.data._id
                    },
                    "IsActive": true,
                  }
                }
              };
              await utility.AccessOptimiserApi(req, accountcontactParam, db);
            }
            else{
                //check mobile is masked  
               // let splitMobile = ContactData[i].Phone.split('');
               //// if(splitMobile.includes('x')) {
					//delete ContactData[i].Phone
				//}
                 if(ContactData[i]?.Phone=='xxxxxxxxxxxx'){
                  delete ContactData[i].Phone
                }
                if(ContactData[i]?.Address=='xxxxxxxxxxxx'){
                  delete ContactData[i].Address
                }
              let contactID= ContactData[i]._id
              delete ContactData[i]._id
              let updateObj = {
                "fields": ContactData[i],
                "collection": "Contact",
                "_id":contactID
            }
            let updateParam = {
                apiname: "updateObject",
                data: updateObj
            };
                await utility.AccessOptimiserApi(req, updateParam, db)
                 //await utility.AccessOptimiserApi(req, ContactParam, db);
                let accountcontactParam = {
                    apiname: "addobjectdata",
                    data: {
                      "collection": "AccountContactRelation",
                      "fields": {
                        "AccountID": {
                          $oid: AccountId
                        },
                        "IsInternal": false,
                       "IsKeyContact": ContactData[i].IsKeyContact ? ContactData[i].IsKeyContact : null,
                        "IsWorking": true,
                        "Roles":null,
                       "ContactID": {
                          $oid: contactID
                        },
                        "IsActive": true,
                      }
                    }
                  };
                  await utility.AccessOptimiserApi(req, accountcontactParam, db);
            }

        }
        //for Main Contact
      	let MainContact = ContactData.find((element) => element.IsKeyContact)

        let mailOptions = {
                        from: "noreply@optimiser.com",
                        to: MainContact.Email,
                        subject: "Registration confirmation from MsDUK",
                        html: 'Thank you for register'
                    };
        await utility.mailer.CreateTransportAndSendMail(mailOptions);
      	// for Account Manager/ Contact Manager
        let mailAccount = {
          from: "noreply@optimiser.com",
          to: DefaultAccountOwnerEmail,
          subject: "Account Manager",
          html: 'You have been assigned as a Account Manager'
      };
      await utility.mailer.CreateTransportAndSendMail(mailAccount);

      let mailContact = {
        from: "noreply@optimiser.com",
        to: DefaultContactOwnerEmail,
        subject: "Account Manager",
        html: 'You have been assigned as a Contact Manager'
    };
      await utility.mailer.CreateTransportAndSendMail(mailContact);
      res.json({accountResult,contactSavedWithPass,ContactData})

    } catch (e) {
      throw e
        res.json({ "message": "error", "error": e })
    }
})()
