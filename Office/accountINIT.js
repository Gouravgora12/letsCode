function(page) {
  let InputFields=['TradingName','PartnerType','EMBType','VenueType','ServicesProducts','ServicesProductDetail','GeographicalCoverage','Languages','KeyCustomerIndustries','KeyCustomerRoles','ElevatorPitch','YearFounded','NumberofEmployees','CompanyRegistrationNumber','LegalStructure','CurrentTurnoverCategory','FinancialYearFrom','FinancialYearTo','GrossTurnover','CertificationStartDate','CertificationEndDate','CertificationStatus','CertificateNumber','EMBMembershipType','CorporateMembershipType','EMBAnnualFee','CorporateAnnualFee','MembershipStartDate','MembershipEndDate','MembershipStatus','Source','Seeking'];
   let hideShowGroups=['ServiceInformation','AdditionalInformation','Turnover','Certification','Membership','Other'];
    let hideFieldFun= function(fieldsArray){
   for(let i=0;i<fieldsArray.length;i++){
   page.PageContainer.find(`[data-field='${fieldsArray[i]}']`).closest('.vld-parent').addClass('d-none');
  } 
   };
   let showFieldsFun= function(fieldsArray){
   for(let i=0;i<fieldsArray.length;i++){
   page.PageContainer.find(`[data-field='${fieldsArray[i]}']`).closest('.vld-parent').removeClass('d-none');
  }};
                 let hideGroupFun= function(groupsArray){
   for(let j=0;j<groupsArray.length;j++){
   page.PageContainer.find(`[data-group='${groupsArray[j]}']`).addClass('d-none');
   }
   };
                                      let showHiddenGroups= function(groupsArray){
   for(let i=0;i<groupsArray.length;i++){
   page.PageContainer.find(`[data-group='${groupsArray[i]}']`).removeClass('d-none');
   }
   };
                                     let makeTheFieldsNull=function(nullValueFields){
   for(let k=0;k<nullValueFields.length;k++){
      page.PageContainer.find(`[data-field='${nullValueFields[k]}']`).val('');
   if(nullValueFields[k]==='CurrentTurnoverCategory'){
   page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(5)}
   if(nullValueFields[k]==='CertificationStatus'){
   page.PageContainer.find("[data-field='CertificationStatus']").val(1)}
    if(nullValueFields[k]==='MembershipStatus'){
   page.PageContainer.find("[data-field='MembershipStatus']").val(3)}}
  }
  let AccountCntrl=page.PageContainer.find("[data-field='AccountType']");
   if(AccountCntrl.val()==1||AccountCntrl.val()==5||AccountCntrl.val()==6||AccountCntrl.val()==7){ 
  let fieldsToHide=['TradingName','PartnerType','EMBType','VenueType'];
   if(AccountCntrl.val()==5){
     fieldsToHide=['TradingName','EMBType','VenueType']; page.PageContainer.find("[data-field='PartnerType']").attr('data-required',true);};
   if(AccountCntrl.val()==7){
   page.PageContainer.find("[data-field='VenueType']").attr('data-required',true); fieldsToHide=['TradingName','EMBType','PartnerType']};
   hideFieldFun(fieldsToHide);
   hideGroupFun(hideShowGroups); 
  };
   if(AccountCntrl.val()==2){
   page.PageContainer.find("[data-field='EMBType']").attr('data-required',true);showHiddenGroups(hideShowGroups);
   let fieldsToHide=['PartnerType','VenueType','CorporateMembershipType','CorporateAnnualFee'];
   hideFieldFun(fieldsToHide);
   }; 
   if(AccountCntrl.val()==3){
   let fieldsToHide=['PartnerType','EMBType','VenueType','KeyCustomerIndustries','KeyCustomerRoles','ElevatorPitch','NumberofEmployees'];
   showFieldsFun(InputFields);
   showHiddenGroups(hideShowGroups);
   hideFieldFun(fieldsToHide);
   hideGroupFun(['Turnover','Certification','Membership','Other']);
  }
   if(AccountCntrl.val()==4){
   showFieldsFun(InputFields);
   showHiddenGroups(hideShowGroups);
   let fieldsToHide=['TradingName','PartnerType','EMBType','VenueType','EMBAnnualFee','EMBMembershipType'];
   hideFieldFun(fieldsToHide);
    hideGroupFun(['ServiceInformation','AdditionalInformation','Turnover','Certification','Other']);
   };
   let IndustryCtrl=page.PageContainer.find("[data-field='Industry']");
   let serviceProductCtrl=page.PageContainer.find("[data-field='ServicesProducts']")
  serviceProductCtrl.on('change', function () {
    
   if (serviceProductCtrl.val().length > 10) {
          serviceProductCtrl.multiselect('deselect', serviceProductCtrl.val()[10])
      }
  }); serviceProductCtrl.multiselect('disable');
  let IndustryList = _common.GetListSchemaDataFromInitData('Industry');
  page.PageContainer.find('[data-field = "Industry"]').closest('.multiselect-native-select').find('div ul .multiselect-all input').attr('disabled' , true)
   let servicesList = [] 
  let selectedService = 
  serviceProductCtrl.val()
  
  let selectedIndustry = 
  IndustryCtrl.val()
  selectedIndustry.forEach((d) => {
   let value = _common.GetValueFromListschemaData(IndustryList, d)
   console.log('----',value)
   let result = [];
    for (let i = 0; i < _initData.ListSchema.length; i++) {	 
   if (_initData.ListSchema[i].DisplayName == value) {
    result =_initData.ListSchema[i].Data.filter(x => x.IsActive == true);
    break;}}
   servicesList.push(...result);}) 
   if(servicesList && servicesList.length) { 
    let inviteOption = '';
      for (let i = 0; i < servicesList.length; i++) {
         inviteOption += '<option value="' + servicesList[i]['Key'] + '">' +  servicesList[i]['Value'] + '</option>' 
   }  
   let ctrl =serviceProductCtrl.closest('.ctrl-container'); 
   serviceProductCtrl.closest('.multiselect-native-select').remove(); 
   ctrl.append(serviceProductCtrl); 
    serviceProductCtrl.html('').append(inviteOption).multiselect({ nonSelectedText: '',enableCaseInsensitiveFiltering: true,includeSelectAllOption: false,  onDropdownShow: function (event) {ctrl.find('.btn.multiselect-clear-filter').trigger('click');}});
   serviceProductCtrl.multiselect('refresh');
  serviceProductCtrl.multiselect('select', selectedService);
  }
   IndustryCtrl.on('change',function(e){
      
    let servicesList = []; if(IndustryCtrl.val().length>0){
   serviceProductCtrl.multiselect('enable')} else{
   serviceProductCtrl.multiselect('disable') } 
  if(IndustryCtrl.val().length>2){ 
   IndustryCtrl.multiselect('deselect',IndustryCtrl.val()[2]);
   if(!page.PageContainer.find("[data-field='Industry']").closest('.ctrl-container').children().hasClass('warning-div')){page.PageContainer.find("[data-field='Industry']").closest('.ctrl-container').append(`<div class="col-sm-12 warning-div"><div class="alert alert-danger alert-dismissible fade show p-1 mt-1 mb-0" role="alert">You cannot select more than two Industries</div></div>`); setTimeout(function(){page.PageContainer.find("[data-field='Industry']").closest('.ctrl-container').find('.warning-div').remove()},2000)};}  	 
  let selectedIndustry = 
  IndustryCtrl.val()
  selectedIndustry.forEach((d) => {
   let value = _common.GetValueFromListschemaData(IndustryList, d)
   console.log('----',value)
   let result = [];
    for (let i = 0; i < _initData.ListSchema.length; i++) {	 
   if (_initData.ListSchema[i].DisplayName == value) {
    result =_initData.ListSchema[i].Data.filter(x => x.IsActive == true);
    break;}}
   servicesList.push(...result);}) 
   if(servicesList && servicesList.length) { 
    let inviteOption = '';
    for (let i = 0; i < servicesList.length; i++) { 
   inviteOption += '<option value="' + servicesList[i]['Key'] + '">' +  servicesList[i]['Value'] + '</option>' 
   } 
   let ctrl =serviceProductCtrl.closest('.ctrl-container'); 
   serviceProductCtrl.closest('.multiselect-native-select').remove(); 
   ctrl.append(serviceProductCtrl); 
    serviceProductCtrl.html('').append(inviteOption).multiselect({ nonSelectedText: '',enableCaseInsensitiveFiltering: true,includeSelectAllOption: false,  onDropdownShow: function (event) {ctrl.find('.btn.multiselect-clear-filter').trigger('click');}});
   serviceProductCtrl.multiselect('refresh');
  serviceProductCtrl.on('change', function () {
   console.log('inside')  
   if (serviceProductCtrl.val().length > 10) {
          serviceProductCtrl.multiselect('deselect', serviceProductCtrl.val()[10])
      }
  });  }
   });
   AccountCntrl.on('change',function(){
   if(AccountCntrl.val()==1||AccountCntrl.val()==5||AccountCntrl.val()==6||AccountCntrl.val()==7){
   showFieldsFun(InputFields);
   
  let fieldsToHide=['TradingName','PartnerType','EMBType','VenueType'];
   if(AccountCntrl.val()==5){
    console.log('accounttype',AccountCntrl.val()); fieldsToHide=['TradingName','EMBType','VenueType']; page.PageContainer.find("[data-field='PartnerType']").attr('data-required',true);};
   if(AccountCntrl.val()==7){
   page.PageContainer.find("[data-field='VenueType']").attr('data-required',true); fieldsToHide=['TradingName','EMBType','PartnerType']};
   hideFieldFun(fieldsToHide);
   hideGroupFun(hideShowGroups);
   makeTheFieldsNull(InputFields);
  };
   if(AccountCntrl.val()==2){
   showFieldsFun(InputFields);
   page.PageContainer.find("[data-field='EMBType']").attr('data-required',true);showHiddenGroups(hideShowGroups);
   let fieldsToHide=['PartnerType','VenueType','CorporateMembershipType','CorporateAnnualFee'];
   hideFieldFun(fieldsToHide);
   makeTheFieldsNull(fieldsToHide);
  } 
   if(AccountCntrl.val()==3){
   let fieldsToHide=['PartnerType','EMBType','VenueType','KeyCustomerIndustries','KeyCustomerRoles','ElevatorPitch','NumberofEmployees'];
   showFieldsFun(InputFields);
   showHiddenGroups(hideShowGroups);
   hideFieldFun(fieldsToHide);
   hideGroupFun(['Turnover','Certification','Membership','Other']);
   makeTheFieldsNull(fieldsToHide);
   }
   if(AccountCntrl.val()==4){
   showFieldsFun(InputFields);
   showHiddenGroups(hideShowGroups);
   let fieldsToHide=['TradingName','PartnerType','EMBType','VenueType','EMBAnnualFee','EMBMembershipType'];
   hideFieldFun(fieldsToHide);
    hideGroupFun(['ServiceInformation','AdditionalInformation','Turnover','Certification','Other']);
   makeTheFieldsNull(fieldsToHide);
   };
                                                                  if(AccountCntrl.val()==''){
   page.PageContainer.find("[data-field='VenueType']").removeAttr('data-required'); page.PageContainer.find("[data-field='EMBType']").removeAttr('data-required'); page.PageContainer.find("[data-field='PartnerType']").removeAttr('data-required');showFieldsFun(InputFields);
  showHiddenGroups(hideShowGroups);
  makeTheFieldsNull(InputFields);
   page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(5)
   page.PageContainer.find("[data-field='CertificationStatus']").val(1);
   }}); 
   let GrossTurnover=page.PageContainer.find("[data-field='GrossTurnover']")
   GrossTurnover.on('change',function(){
   if(GrossTurnover.val().includes('.')&& GrossTurnover.val().split('.')[1].length>2){ GrossTurnover.val(parseFloat(GrossTurnover.val()).toFixed(2)) };  if(GrossTurnover.val() < 200000){ 
   page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(1)
  };
                              if(GrossTurnover.val() > 200000 && GrossTurnover.val() <500000){
   page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(2)
  };
                                  if(GrossTurnover.val() >500000 && GrossTurnover.val() <2000000){
   page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(3)
  };
                                if(GrossTurnover.val() > 2000000){
   page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(4);} if(!GrossTurnover.val()){
   page.PageContainer.find("[data-field='CurrentTurnoverCategory']").val(5)}});
   let EMBMemberShipType=page.PageContainer.find("[data-field='EMBMembershipType']")
   EMBMemberShipType.on('change',function(){
  if(EMBMemberShipType.val()==1||EMBMemberShipType.val()==2){page.PageContainer.find("[data-field='EMBAnnualFee']").val('300.00')
  } else if(EMBMemberShipType.val()==3||EMBMemberShipType.val()==4){
   page.PageContainer.find("[data-field='EMBAnnualFee']").val('0.00')
  } else {page.PageContainer.find("[data-field='EMBAnnualFee']").val('')}});
   let CorporateMembershipType=page.PageContainer.find("[data-field='CorporateMembershipType']")
   CorporateMembershipType.on('change',function(){
   if(CorporateMembershipType.val()==1){
   page.PageContainer.find("[data-field='CorporateAnnualFee']").val('1000.00')} else if(CorporateMembershipType.val()==2){
   page.PageContainer.find("[data-field='CorporateAnnualFee']").val('3000.00')} else if(CorporateMembershipType.val()==3){
   page.PageContainer.find("[data-field='CorporateAnnualFee']").val('7000.00')} else if(CorporateMembershipType.val()==2){
   page.PageContainer.find("[data-field='CorporateAnnualFee']").val('12000.00')}});
   let MembershipStartDate=page.PageContainer.find("[data-field='MembershipStartDate']")
   MembershipStartDate.on('change',function(){
   if(moment(MembershipStartDate.val().toString()).isValid()){
   MembershipEndDate=page.PageContainer.find("[data-field='MembershipEndDate']")
   if(!moment(MembershipEndDate.val().toString()).isValid()){
   MembershipEndDate.val( moment(MembershipStartDate.val()).add(1, 'Y').format('DD-MMM-YYYY'))}
   let todaysDate= moment().format('DD-MMM-YYYY');
   if(moment(todaysDate).diff(MembershipStartDate.val(), 'd') >=0 && moment(MembershipEndDate.val()).diff(todaysDate,'d')>0){ page.PageContainer.find("[data-field='MembershipStatus']").val(1);
   };
   if(moment(todaysDate).diff(MembershipEndDate.val(),'d')>0){ page.PageContainer.find("[data-field='MembershipStatus']").val(2)}
   if(moment(todaysDate).diff(MembershipStartDate.val(),'d')<0){ page.PageContainer.find("[data-field='MembershipStatus']").val(3)}
   } else{
   page.PageContainer.find("[data-field='MembershipEndDate']").val('');
   page.PageContainer.find("[data-field='MembershipStatus']").val(3)} });
   let MembershipEndDate= page.PageContainer.find("[data-field='MembershipEndDate']");
   MembershipEndDate.on('change',function(){
    if(moment(MembershipStartDate.val().toString()).isValid() && moment(MembershipEndDate.val().toString()).isValid()){
   let todaysDate= moment().format('DD-MMM-YYYY');
   let MembershipStartDate = page.PageContainer.find("[data-field='MembershipStartDate']")
   if(moment(todaysDate).diff(MembershipStartDate.val(), 'd') >=0 && moment(MembershipEndDate.val()).diff(todaysDate,'d')>0){
    page.PageContainer.find("[data-field='MembershipStatus']").val(1)} else if(moment(todaysDate).diff(MembershipEndDate.val(),'d')>0){ page.PageContainer.find("[data-field='MembershipStatus']").val(2)}
   if(moment(todaysDate).diff(CertificationStartDate.val(),'d')<0){ page.PageContainer.find("[data-field='MembershipStatus']").val(3)}
  } else{ 
  page.PageContainer.find("[data-field='MembershipStatus']").val(3);
   page.PageContainer.find("[data-field='CertificationStartDate']").val('')}});
   let CertificationStartDate=page.PageContainer.find("[data-field='CertificationStartDate']")
   CertificationStartDate.on('change',function(){
   if(moment(CertificationStartDate.val().toString()).isValid()){
   let CertificationEndDate=page.PageContainer.find("[data-field='CertificationEndDate']")
   if(!moment(CertificationEndDate.val().toString()).isValid()){
   CertificationEndDate.val( moment(CertificationStartDate.val()).add(1, 'Y').format('DD-MMM-YYYY'))} let todaysDate= moment().format('DD-MMM-YYYY');
   if(moment(todaysDate).diff(CertificationStartDate.val(), 'd') >=0 && moment(CertificationEndDate.val()).diff(todaysDate,'d')>0){ page.PageContainer.find("[data-field='CertificationStatus']").val(2);
   page.PageContainer.find("[data-field='CertificateNumber']").val(Math.floor((Math.random() * 1000000) + 1))};
   if(moment(todaysDate).diff(CertificationEndDate.val(),'d')>0){ page.PageContainer.find("[data-field='CertificationStatus']").val(3)}
   if(moment(todaysDate).diff(CertificationStartDate.val(),'d')<0){ page.PageContainer.find("[data-field='CertificationStatus']").val(1)}
   } else{
   page.PageContainer.find("[data-field='CertificationEndDate']").val('');
   page.PageContainer.find("[data-field='CertificationStatus']").val(1)}})
   let CertificationEndDate= page.PageContainer.find("[data-field='CertificationEndDate']");
   CertificationEndDate.on('change',function(){
   if(moment(CertificationStartDate.val().toString()).isValid() && moment(CertificationEndDate.val().toString()).isValid()){
   let todaysDate= moment().format('DD-MMM-YYYY');
   let CertificationStartDate = page.PageContainer.find("[data-field='CertificationStartDate']")
   if(moment(todaysDate).diff(CertificationStartDate.val(), 'd') >=0 && moment(CertificationEndDate.val()).diff(todaysDate,'d')>0){
   page.PageContainer.find("[data-field='CertificateNumber']").val(Math.floor((Math.random() * 1000000) + 1));
   page.PageContainer.find("[data-field='CertificationStatus']").val(2)} else if(moment(todaysDate).diff(CertificationEndDate.val(),'d')>0){ page.PageContainer.find("[data-field='CertificationStatus']").val(3)}
   if(moment(todaysDate).diff(CertificationStartDate.val(),'d')<0){ page.PageContainer.find("[data-field='CertificationStatus']").val(1)}
  } else{ 
  page.PageContainer.find("[data-field='CertificationStatus']").val('1');
   page.PageContainer.find("[data-field='CertificationStartDate']").val('')}});}