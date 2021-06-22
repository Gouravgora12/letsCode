function(page) {
    let AccountCntrl = page.PageContainer.find("[data-field='AccountType']");
    let IndustryCtrl = page.PageContainer.find("[data-field='Industry']");
    let serviceProductCtrl = page.PageContainer.find("[data-field='ServicesProducts']")
    let PaymentStatusCtrl = page.PageContainer.find("[data-field='PaymentStatus']")
    let SourceCtrl = page.PageContainer.find("[data-field='Source']")
    let MembershipStatus = page.PageContainer.find("[data-field='MembershipStatus']")
    let GrossTurnover = page.PageContainer.find("[data-field='GrossTurnover']")
    let CertificationStartDate = page.PageContainer.find("[data-field='CertificationStartDate']")
    let CertificationEndDate = page.PageContainer.find("[data-field='CertificationEndDate']");
    let CertificationStatus = page.PageContainer.find("[data-field='CertificationStatus']");
    let EMBMemberShipType = page.PageContainer.find("[data-field='EMBMembershipType']")
    AccountCntrl.find("option[value=1]").attr("disabled", "disabled")
    AccountCntrl.find("option[value=2]").attr("disabled", "disabled")
    AccountCntrl.find("option[value=4]").attr("disabled", "disabled")
    let InputFields = []
    let hideShowGroups = []
    page.AllFields.forEach((d) => {
      var SchemaHidden = d.Schema ? d.Schema.IsHidden : false
      if (!d.IsHidden && !SchemaHidden) {
        InputFields.push(d.Name)
      }
    })
    page.PageData.Groups.forEach(d => { hideShowGroups.push(d.Name) })
    let hideFieldFun = function (fieldsArray) {
      if (fieldsArray && fieldsArray.length) {
        for (let i = 0; i < fieldsArray.length; i++) {
          page.PageContainer.find(`[data-field='${fieldsArray[i]}']`).closest('.vld-parent').addClass('d-none');
        }
      }
  
    };
    let showFieldsFun = function (fieldsArray) {
      for (let i = 0; i < fieldsArray.length; i++) {
        page.PageContainer.find(`[data-field='${fieldsArray[i]}']`).closest('.vld-parent').removeClass('d-none');
      }
    };
    let hideGroupFun = function (groupsArray) {
      if (groupsArray && groupsArray.length) {
        for (let j = 0; j < groupsArray.length; j++) {
          page.PageContainer.find(`[data-group='${groupsArray[j]}']`).addClass('d-none');
        }
      }
  
    };
    let showHiddenGroups = function (groupsArray) {
      for (let i = 0; i < groupsArray.length; i++) {
        page.PageContainer.find(`[data-group='${groupsArray[i]}']`).removeClass('d-none');
      }
    };
    let makeTheFieldsNull = function (nullValueFields) {
        if(nullValueFields && nullValueFields.length){
            for (let k = 0; k < nullValueFields.length; k++) {
                page.PageContainer.find(`[data-field='${nullValueFields[k]}']`).val('');
                if (nullValueFields[k] === 'CurrentTurnoverCategory') {
                  page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(5)
                }
                if (nullValueFields[k] === 'CertificationStatus') {
                  page.PageContainer.find("[data-field='CertificationStatus']").val(1)
                }
                if (nullValueFields[k] === 'MembershipStatus') {
                  page.PageContainer.find("[data-field='MembershipStatus']").val(4)
                }
                if (nullValueFields[k] === 'ServicesProducts') {
                  page.PageContainer.find("[data-field='ServicesProducts']").multiselect('refresh')
                }
                if (nullValueFields[k] === 'Industry') {
                  page.PageContainer.find("[data-field='Industry']").multiselect('refresh')
                }
              }
        }
     
    }
    let makeGroupValueNull=function(nullGroupsInputes){
        if (nullGroupsInputes && nullGroupsInputes.length) {
            for (let i = 0; i < nullGroupsInputes.length; i++) {
              page.PageContainer.find(`[data-group='${nullGroupsInputes[i]}']`).find('[data-field]').each(function(){
                let ui= $(this).attr('data-ui')
                if(ui=='lookup'){
                    $(this).find('.lookup-item').remove()
                }
                else if(ui=='multiselect'){
                    $(this).multiselect('refresh')
                }
                else if(ui=='file'){
                    let vldParent = $(this).closest('.vld-parent');
                    $(this).parent().find('.div-file-uploading').html('').prev().show();
                    vldParent.removeClass('has-error');
                    vldParent.find('.vld-message').remove()
                }
                else{
                    $(this).val(" ")
                }
                })
            }
          }
    }
    SourceCtrl.on('change', function () {
      let sourceValue = $(this).val()
      if (sourceValue == '9') {
        showFieldsFun(['SourceDetails']);
      }
      else {
        hideFieldFun(['SourceDetails'])
        makeTheFieldsNull(['SourceDetails'])
      }
    })
    let hideFields = {}
    let groupsToHide = {}
    hideFields['1'] = ['NumberofEmployees','PartnerMembershipType', 'ListClients', 'LargestBussinessDelivered', 'PartnerType', 'EMBType', 'VenueType', 'YearFounded', 'TradingName', 'CompanyRegistrationNumber', 'LegalStructure', 'Source', 'SourceDetails', 'Seeking', 'SeekingDetails', 'Enquiry', 'EMBMembershipType', 'EMBAnnualFee']
    hideFields['2'] = ['NumberofEmployees', 'ListClients', 'LargestBussinessDelivered', 'EMBType', 'VenueType', 'YearFounded', 'TradingName', 'CompanyRegistrationNumber', 'LegalStructure', 'SourceDetails', 'EMBMembershipType', 'EMBAnnualFee', 'CorporateMembershipType', 'CorporateAnnualFee',  'PreferredMethodPayment', 'PaymentStatus', 'Seeking', 'SeekingDetails']
    hideFields['3'] = ['NumberofEmployees','PartnerMembershipType', 'ListClients', 'LargestBussinessDelivered', 'PartnerType', 'MembershipStatus', 'EMBType', 'YearFounded', 'TradingName', 'CompanyRegistrationNumber', 'LegalStructure', 'Source', 'SourceDetails', 'EMBMembershipType', 'EMBAnnualFee', 'CorporateMembershipType', 'CorporateAnnualFee', 'MembershipStartDate', 'MembershipEndDate', 'PreferredMethodPayment', 'PaymentStatus', 'Seeking', 'SeekingDetails', 'Enquiry']
    hideFields['4'] = ['PartnerType', 'VenueType','PartnerMembershipType', 'Enquiry', 'CorporateMembershipType', 'CorporateAnnualFee', 'PreferredMethodPayment']
    hideFields['5'] = ['NumberofEmployees','PartnerMembershipType', 'ListClients', 'LargestBussinessDelivered', 'PartnerType', 'VenueType', 'MembershipStatus', 'EMBType', 'YearFounded', 'TradingName', 'CompanyRegistrationNumber', 'LegalStructure', 'Source', 'SourceDetails', 'EMBMembershipType', 'EMBAnnualFee', 'CorporateMembershipType', 'CorporateAnnualFee', 'MembershipStartDate', 'MembershipEndDate', 'PreferredMethodPayment', 'PaymentStatus', 'Seeking', 'SeekingDetails', 'Enquiry']
    hideFields['6'] = ['NumberofEmployees','PartnerMembershipType', 'ListClients', 'LargestBussinessDelivered', 'PartnerType', 'EMBType', 'VenueType', 'Source', 'SourceDetails', 'Seeking', 'SeekingDetails', 'Enquiry', 'KeyCustomerIndustries', 'KeyCustomerRoles', 'ElevatorPitch']
  
    groupsToHide["1"] = ['ServiceInformation', 'Turnover', 'Certification']
    groupsToHide["2"] = ['ServiceInformation', 'Turnover', 'Certification']
    groupsToHide["3"] = ['ServiceInformation', 'Turnover', 'Certification', 'Membership']
    groupsToHide["5"] = ['ServiceInformation', 'Turnover', 'Certification', 'Membership']
    groupsToHide["6"] = ['Turnover', 'Certification', 'Membership']
  
    AccountCntrl.on('change', function () {
      showFieldsFun(InputFields);
      showHiddenGroups(hideShowGroups);
      hideFieldFun(hideFields[AccountCntrl.val()]);
      hideGroupFun(groupsToHide[AccountCntrl.val()]);
      makeGroupValueNull(groupsToHide[AccountCntrl.val()])
      makeTheFieldsNull(hideFields[AccountCntrl.val()]);
    });
  
    //Edit case
    if (page.Data && page.Data._id) {
      AccountCntrl.find("option[value=1]").removeAttr("disabled")
      AccountCntrl.find("option[value=2]").removeAttr("disabled")
      AccountCntrl.find("option[value=4]").removeAttr("disabled")
      let AccountType = page.Data.AccountType
      if (AccountType) {
        showFieldsFun(InputFields);
        hideFieldFun(hideFields[AccountType]);
        showHiddenGroups(hideShowGroups);
        hideGroupFun(groupsToHide[AccountType]);
        makeGroupValueNull(groupsToHide[AccountType])
      }
  
    }
  
    if (AccountCntrl.val() == '') {
      page.PageContainer.find("[data-field='VenueType']").removeAttr('data-required'); page.PageContainer.find("[data-field='EMBType']").removeAttr('data-required'); page.PageContainer.find("[data-field='PartnerType']").removeAttr('data-required'); showFieldsFun(InputFields);
      showHiddenGroups(hideShowGroups);
      makeTheFieldsNull(InputFields);
      page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(5)
      page.PageContainer.find("[data-field='CertificationStatus']").val(1);
    }
    if (page && page.Data && page.Data.Source == '9') {
      showFieldsFun(['SourceDetails']);
    }
    else {
      hideFieldFun(['SourceDetails'])
    }
    PaymentStatusCtrl.attr('disabled', true)
    serviceProductCtrl.on('change', function () {
      if(AccountCntrl.val() == "4" || AccountCntrl.val() == "6" || (page.data && page.data._id && (page.data.AccountType == "4" || page.data.AccountType == "4") ) ) {
        if (serviceProductCtrl.val().length > 10) {
          serviceProductCtrl.multiselect('deselect', serviceProductCtrl.val()[10])
        }
      }
      
    });
    serviceProductCtrl.multiselect('disable');
    let IndustryList = _common.GetListSchemaDataFromInitData('Industry');
    page.PageContainer.find('[data-field = "Industry"]').closest('.multiselect-native-select').find('div ul .multiselect-all input').attr('disabled', true)
    let servicesList = []
    let selectedService =
      serviceProductCtrl.val()
  
    let selectedIndustry = IndustryCtrl.val()
    selectedIndustry.forEach((d) => {
      let value = _common.GetValueFromListschemaData(IndustryList, d)
      let result = [];
      for (let i = 0; i < _initData.ListSchema.length; i++) {
        if (_initData.ListSchema[i].DisplayName == value) {
          result = _initData.ListSchema[i].Data.filter(x => x.IsActive == true);
          break;
        }
      }
      servicesList.push(...result);
    })
    if (servicesList && servicesList.length) {
      let inviteOption = '';
      for (let i = 0; i < servicesList.length; i++) {
        inviteOption += '<option value="' + servicesList[i]['Key'] + '">' + servicesList[i]['Value'] + '</option>'
      }
      let ctrl = serviceProductCtrl.closest('.ctrl-container');
      serviceProductCtrl.closest('.multiselect-native-select').remove();
      ctrl.append(serviceProductCtrl);
      serviceProductCtrl.html('').append(inviteOption).multiselect({ nonSelectedText: '', enableCaseInsensitiveFiltering: true, includeSelectAllOption: false, onDropdownShow: function (event) { ctrl.find('.btn.multiselect-clear-filter').trigger('click'); } });
      serviceProductCtrl.multiselect('refresh');
      serviceProductCtrl.multiselect('select', selectedService);
    }
    IndustryCtrl.on('change', function (e) {
  
      let servicesList = [];
      if (IndustryCtrl.val().length > 0) {
        serviceProductCtrl.multiselect('enable')
      } else {
        serviceProductCtrl.multiselect('disable')
      }
      if(AccountCntrl.val() == "4" || AccountCntrl.val() == "6" || (page.data && page.data._id && (page.data.AccountType == "4" || page.data.AccountType == "4") ) ) {
        if (IndustryCtrl.val().length > 2) {
          IndustryCtrl.multiselect('deselect', IndustryCtrl.val()[2]);
          if (!page.PageContainer.find("[data-field='Industry']").closest('.ctrl-container').children().hasClass('warning-div')) { page.PageContainer.find("[data-field='Industry']").closest('.ctrl-container').append(`<div class="col-sm-12 warning-div"><div class="alert alert-danger alert-dismissible fade show p-1 mt-1 mb-0" role="alert">You cannot select more than 2 Industries</div></div>`); setTimeout(function () { page.PageContainer.find("[data-field='Industry']").closest('.ctrl-container').find('.warning-div').remove() }, 2000) };
        }
      }
      
      let selectedIndustry =
        IndustryCtrl.val()
      selectedIndustry.forEach((d) => {
        let value = _common.GetValueFromListschemaData(IndustryList, d)
        console.log('----', value)
        let result = [];
        for (let i = 0; i < _initData.ListSchema.length; i++) {
          if (_initData.ListSchema[i].DisplayName == value) {
            result = _initData.ListSchema[i].Data.filter(x => x.IsActive == true);
            break;
          }
        }
        servicesList.push(...result);
      })
      if (servicesList && servicesList.length) {
        let inviteOption = '';
        for (let i = 0; i < servicesList.length; i++) {
          inviteOption += '<option value="' + servicesList[i]['Key'] + '">' + servicesList[i]['Value'] + '</option>'
        }
        let ctrl = serviceProductCtrl.closest('.ctrl-container');
        serviceProductCtrl.closest('.multiselect-native-select').remove();
        ctrl.append(serviceProductCtrl);
        serviceProductCtrl.html('').append(inviteOption).multiselect({ nonSelectedText: '', enableCaseInsensitiveFiltering: true, includeSelectAllOption: false, onDropdownShow: function (event) { ctrl.find('.btn.multiselect-clear-filter').trigger('click'); } });
        serviceProductCtrl.multiselect('refresh');
        serviceProductCtrl.on('change', function () {
          if(AccountCntrl.val() == "4" || AccountCntrl.val() == "6" || (page.data && page.data._id && (page.data.AccountType == "4" || page.data.AccountType == "4") ) ) {
            if (serviceProductCtrl.val().length > 10) {
              serviceProductCtrl.multiselect('deselect', serviceProductCtrl.val()[10])
            }
          }
        });
      }
    });
    let MembershipStartDate = page.PageContainer.find("[data-field='MembershipStartDate']")
    let MembershipEndDate = page.PageContainer.find("[data-field='MembershipEndDate']");
    let CorporateMembershipType = page.PageContainer.find("[data-field='CorporateMembershipType']")
    let CorporateAnnualFee = page.PageContainer.find("[data-field='CorporateAnnualFee']")
    //let MembershipStatus = page.PageContainer.find("[data-field='MembershipStatus']")
    let Duration;
    let DurationType;
    CorporateMembershipType.on('onLookupChange', function (e, el) {
      if (el.item && el.item.LookupData && el.item.LookupData.Duration && el.item.LookupData.DurationType) {
        let price = el.item.LookupData.Price.$numberDecimal;
        CorporateAnnualFee.val(price);
        Duration = el.item.LookupData.Duration;
        DurationType = el.item.LookupData.DurationType.toLowerCase();
        //Add duration in membershipend date
        let curDate;
        if (MembershipStartDate.attr('data-date')) {
          curDate = MembershipStartDate.attr('data-date')
        } else {
          curDate = moment()
        }
  
        let MembershipEnd = moment(curDate, "DD-MMM-YYYY").add(Duration, DurationType).format('DD-MMM-YYYY');
        MembershipEndDate.attr('data-date', MembershipEnd)
        MembershipEndDate.val(MembershipEnd)
        if (moment(MembershipEnd) < moment()) {
          MembershipStatus.val(4)
        }
      }
    });
  
    MembershipStartDate.on('change', function () {
      let startDate = $(this).attr('data-date')
      let MembershipEnd
      if(page.Data && page.Data._id && page.Data.AccountType==2){
        Duration=page.PageContainer.find('[data-field="PartnerMembershipType"] span>span').attr('data-duration')
        DurationType=page.PageContainer.find('[data-field="PartnerMembershipType"] span>span').attr('data-durationtype')
        
    }
      MembershipEnd = moment(startDate, "YYYY-MM-DD").add(Duration, DurationType).format('DD-MMM-YYYY');
      MembershipEndDate.attr('data-date', MembershipEnd)
      MembershipEndDate.val(MembershipEnd)
      if (moment(MembershipEnd) < moment()) {
        MembershipStatus.val(4)
      }
      else if(moment()>=moment(startDate)){
        MembershipStatus.val(3)
      }
    })
  
    CorporateMembershipType.on('click', '.fa-times', function () {
      MembershipEndDate.val('')
      MembershipStatus.val('')
      CorporateAnnualFee.val('');
    });
  
    MembershipStatus.on('change', function () {
      let memberStatusValue = $(this).val()
      if (memberStatusValue == 2) {
        PaymentStatusCtrl.removeAttr('disabled')
  
      } else {
        PaymentStatusCtrl.attr('disabled', true)
      }
    })
    //edit memberstatus
    let memberStatusValue = MembershipStatus.val()
    if (memberStatusValue == 2) {
      PaymentStatusCtrl.removeAttr('disabled')
    } else {
      PaymentStatusCtrl.attr('disabled', true)
    };
    let cityCtrl = page.PageContainer.find("[data-field='City']")
    cityCtrl.on('onLookupChange', function (e, el) {
      if (el.item && el.item.LookupData && el.item.LookupData.Region) {
        console.log("here", el.item.LookupData)
        page.PageContainer.find("[data-field='Region']").val(el.item.LookupData.Region)
      }
    });
    GrossTurnover.on('change', function () {
      if (GrossTurnover.val().includes('.') && GrossTurnover.val().split('.')[1].length > 2) {
        GrossTurnover.val(parseFloat(GrossTurnover.val()).toFixed(2))
      };
      if (GrossTurnover.val() < 200000) {
        page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(1)
      };
      if (GrossTurnover.val() > 200000 && GrossTurnover.val() < 500000) {
        page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(2)
      };
      if (GrossTurnover.val() > 500000 && GrossTurnover.val() < 2000000) {
        page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(3)
      };
      if (GrossTurnover.val() > 2000000) {
        page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(4);
      } if (!GrossTurnover.val()) {
        page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(5)
      }
    });
    
    
    
    CertificationStartDate.on('change', function () {
        if (moment(CertificationStartDate.val().toString()).isValid()) {
            let CertificationEndDate = page.PageContainer.find("[data-field='CertificationEndDate']")
            if (!moment(CertificationEndDate.val().toString()).isValid()) {
                CertificationEndDate.val(moment(CertificationStartDate.val()).add(1, 'Y').format('DD-MMM-YYYY'))
            } let todaysDate = moment().format('DD-MMM-YYYY');
            if (moment(todaysDate).diff(CertificationStartDate.val(), 'd') >= 0 && moment(CertificationEndDate.val()).diff(todaysDate, 'd') > 0) {
                page.PageContainer.find("[data-field='CertificationStatus']").val(2);
                page.PageContainer.find("[data-field='CertificateNumber']").val(Math.floor((Math.random() * 1000000) + 1))
            };
            if (moment(todaysDate).diff(CertificationEndDate.val(), 'd') > 0) { page.PageContainer.find("[data-field='CertificationStatus']").val(3) }
            if (moment(todaysDate).diff(CertificationStartDate.val(), 'd') < 0) { page.PageContainer.find("[data-field='CertificationStatus']").val(1) }
        } else {
            page.PageContainer.find("[data-field='CertificationEndDate']").val('');
            page.PageContainer.find("[data-field='CertificationStatus']").val(1)
        }
    })
    
    CertificationEndDate.on('change', function () {
        if (moment(CertificationStartDate.val().toString()).isValid() && moment(CertificationEndDate.val().toString()).isValid()) {
            let todaysDate = moment().format('DD-MMM-YYYY');
            let CertificationStartDate = page.PageContainer.find("[data-field='CertificationStartDate']")
            if (moment(todaysDate).diff(CertificationStartDate.val(), 'd') >= 0 && moment(CertificationEndDate.val()).diff(todaysDate, 'd') > 0) {
                page.PageContainer.find("[data-field='CertificateNumber']").val(Math.floor((Math.random() * 1000000) + 1));
                page.PageContainer.find("[data-field='CertificationStatus']").val(2)
            } else if (moment(todaysDate).diff(CertificationEndDate.val(), 'd') > 0) { page.PageContainer.find("[data-field='CertificationStatus']").val(3) }
            if (moment(todaysDate).diff(CertificationStartDate.val(), 'd') < 0) { page.PageContainer.find("[data-field='CertificationStatus']").val(1) }
        } else {
            page.PageContainer.find("[data-field='CertificationStatus']").val('1');
            page.PageContainer.find("[data-field='CertificationStartDate']").val('')
        }
    });
  
  
    EMBMemberShipType.on('onLookupChange', function (e, el) {
      if (el.item && el.item.LookupData && el.item.LookupData.Duration && el.item.LookupData.DurationType) {
        if(el.item.LookupData.MembershipName == "Premium")   {
          CertificationStartDate.attr('data-required','')
          CertificationEndDate.attr('data-required','')
          CertificationStatus.attr('data-required','')
        } else {
          CertificationStartDate.removeAttr('data-required')
          CertificationEndDate.removeAttr('data-required')
          CertificationStatus.removeAttr('data-required')
        }
        let price = el.item.LookupData.Price.$numberDecimal;
        page.PageContainer.find("[data-field='EMBAnnualFee']").val(price);
        Duration = el.item.LookupData.Duration;
        DurationType = el.item.LookupData.DurationType.toLowerCase();
        //Add duration in membershipend date
        let curDate;
        if (MembershipStartDate.attr('data-date')) {
          curDate = MembershipStartDate.attr('data-date')
        } else {
          curDate = moment()
        }
  
        let MembershipEnd = moment(curDate, "DD-MMM-YYYY").add(Duration, DurationType).format('DD-MMM-YYYY');
        MembershipEndDate.attr('data-date', MembershipEnd)
        MembershipEndDate.val(MembershipEnd)
        if (moment(MembershipEnd) < moment()) {
          MembershipStatus.val(4)
        }
      }
    });
  
  
  }