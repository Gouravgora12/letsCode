db.getCollection("mycolection").update({"PageName":"ProductDetail"}, { '$push': {"Groups.0.Fields" : { "$each": [ {
    "Name" : "DefaultOwner",
    "Sequence" : 3
}, 
{
    "Name" : "TermsAndCondition",
    "Sequence" : 3
}]}} });

db.getCollection('ListSchema').insertOne({​​​​​​​
    "Name" : "ShopAppointmentServicePaymentStatus",
    "DisplayName" : "Shop Appointment Service Payment Status",
    "Data" : [ 
        {​​​​​​​
            "Key" : "paid",
            "Value" : "Paid",
            "IsActive" : true
        }​​​​​​​,
    {​​​​​​​
            "Key" : "unpaid",
            "Value" : "UnPaid",
            "IsActive" : true
        }​​​​​​​
    ]
  }​​​​​​​)



db.getCollection('ObjectSchema').updateMany(
    {​​​​​​​Name:"Contact"}​​​​​​​,
    {​​​​​​​ "$push":{​​​​​​​
    "Fields" :{​​​​​​​$each:[
        {
            "Name" : "TermsAndCondition",
            "DisplayName" : "Terms And Condition",
            "ApiName" : "TermsAndCondition",
            "UIDataType" : "multilookup",
            "LookupObject" : "TermsCondition",
            "LookupFields" : [ 
                "Title", 
                "IsEnabled", 
                "IsMandatory", 
                "DocumentFiles"
            ],
            "LookupFormat" : "{{$Title}}",
            "IsFilter" : true,
            "MatchByFields" : [ 
                {
                    "Field" : "IsEnabled",
                    "Value" : true
                }
            ],
            "HasAddButton" : false
        },
        {
            "Name" : "DefaultOwner",
            "DisplayName" : "Default Owner",
            "ApiName" : "DefaultOwner",
            "UIDataType" : "lookup",
            "LookupObject" : "User",
            "LookupFields" : [ 
                "FirstName", 
                "LastName"
            ],
            "ExtraLookupFields" : [ 
                "UserStatus"
            ],
            "IsRequired" : true
        }
    ]}
    }​​​​​​​​​​​​​​
    }​​​​​​​
    )




