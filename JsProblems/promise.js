let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('error');

    },1000)
   
})
// promise.then(()=>{
//     console.log('done')
// }).catch((e)=>{
//     console.log(e)
// })
let makeGroupValueNull=function(nullGroupsInputes){
    if (nullGroupsInputes && nullGroupsInputes.length) {
        for (let i = 0; i < groupsArray.length; i++) {
          page.PageContainer.find(`[data-group='${nullGroupsInputes[i]}']`).find('[data-field]').each(function(){
            let ui= $(this).attr('data-ui')
            if(ui!='lookup'){
            $(this).val(" ")
            }
            else{
                
            }
            })
        }
      }
}