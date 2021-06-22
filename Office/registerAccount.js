function (page) {let AccountCtrl= page.PageContainer.find('[data-field="AccountID"]')
let OwnerShipGroup = page.PageContainer.find('[data-group="OwnershipInformation"]')
let EthnicOrigin= page.PageContainer.find('[data-group="EthnicOrigin"]')
let EthnicOriginList = _common.GetListSchemaDataFromInitData('EthnicOrigin');
EthnicOrigin.on('change',function(){
  let originVal= $(this).val();

 let  dropDownforEthnicity= _common.GetValueFromListschemaData(EthnicOriginList, originVal)
})
let accountType;
OwnerShipGroup.hide()

AccountCtrl.on("onLookupChange", function (e, el) {
  if (el.item && el.item.LookupData && el.item.LookupData.AccountType && el.item.LookupData.AccountType == 4) {
    OwnerShipGroup.show()
 }
})

if(page.Data && page.Data._id){
  accountType=page.PageContainer.find('[data-field="AccountID"] span>span').attr('data-accountType')
} else {
  accountType = page.PageContainer[0].MainPageData.Data.AccountType
}

AccountCtrl.on('click', '.fa-times', function () {
  makeGroupValueNull(['OwnershipInformation'])
OwnerShipGroup.hide()});

if(accountType && accountType == 4) {
  OwnerShipGroup.show()
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

}


IndustryCtrl.on('change', function (e) {

  let servicesList = [];
  if (IndustryCtrl.val().length > 0) {
    serviceProductCtrl.multiselect('enable')
  } else {
    serviceProductCtrl.multiselect('disable')
  }
  if(AccountCntrl.val() == "4" || (page.data && page.data._id && page.data.AccountType == "4")  ) {
    if (IndustryCtrl.val().length > 2) {
      IndustryCtrl.multiselect('deselect', IndustryCtrl.val()[2]);
      if (!page.PageContainer.find("[data-field='Industry']").closest('.ctrl-container').children().hasClass('warning-div')) { page.PageContainer.find("[data-field='Industry']").closest('.ctrl-container').append(`<div class="col-sm-12 warning-div"><div class="alert alert-danger alert-dismissible fade show p-1 mt-1 mb-0" role="alert">You cannot select more than 2 Industries</div></div>`); setTimeout(function () { page.PageContainer.find("[data-field='Industry']").closest('.ctrl-container').find('.warning-div').remove() }, 2000) };
    }
  }
  
  let selectedIndustry = IndustryCtrl.val()
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
    serviceProductCtrl.closest('div').find('.btn-group > button').addClass('data-required-class');

    serviceProductCtrl.on('change', function () {
      if(AccountCntrl.val() == "4" ||  page.data && page.data._id && page.data.AccountType == "4" ) {
        if (serviceProductCtrl.val().length > 10) {
          serviceProductCtrl.multiselect('deselect', serviceProductCtrl.val()[10])
        }
      }
    });
  }
});