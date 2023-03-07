import Api from '../utils/request'

async function apiAddHinge (
    dampingSystem:string,
    doorPanelAdjustment:string,
    hingeBase:string,
    hingeCupInstallation:string,
    id:string,
    installationMaterial:string,
    installationMethod:string,
    largeAngleHinge:string,
    model:string,
    name:string,
    openingAngle:string,
    optionalEquipment:string,
    shutDownSystem:string,
    ){
   let api=await Api({
        url:'/json/AddHinge',
        method:'post',
        transformRequest: [function(data) {
            data = JSON.stringify(data)
            return data
          }],
          data: {
            "dampingSystem": dampingSystem,
            "doorPanelAdjustment": doorPanelAdjustment,
            "hingeBase": hingeBase,
            "hingeCupInstallation": hingeCupInstallation,
            "id": id,
            "installationMaterial": installationMaterial,
            "installationMethod":installationMethod ,
            "largeAngleHinge": largeAngleHinge,
            "model": model,
            "name": name,
            "openingAngle":openingAngle ,
            "optionalEquipment":optionalEquipment ,
            "shutDownSystem": shutDownSystem,
          }
    }).then((res)=>{
       return res;
    });
    return api;
}

async function apiupdateHinge (
    dampingSystem:string,
    doorPanelAdjustment:string,
    hingeBase:string,
    hingeCupInstallation:string,
    id:string,
    installationMaterial:string,
    installationMethod:string,
    largeAngleHinge:string,
    model:string,
    name:string,
    openingAngle:string,
    optionalEquipment:string,
    shutDownSystem:string,
    ){
   let api=await Api({
        url:'/json/updateHinge',
        method:'post',
          params: {
            "dampingSystem": dampingSystem,
            "doorPanelAdjustment": doorPanelAdjustment,
            "hingeBase": hingeBase,
            "hingeCupInstallation": hingeCupInstallation,
            "id": id,
            "installationMaterial": installationMaterial,
            "installationMethod":installationMethod ,
            "largeAngleHinge": largeAngleHinge,
            "model": model,
            "name": name,
            "openingAngle":openingAngle ,
            "optionalEquipment":optionalEquipment ,
            "shutDownSystem": shutDownSystem,
          }
    }).then((res)=>{
       return res;
    });
    return api;
}

const apiaddImage = (File:FormData,Url:string)=>{
    Api({
        url:"/json/AddImage",
        method:'post', 
        params:{
            url:Url
       },
       data:{
            file:File
       }   
    }).then((res)=>{
       return res;
    });
}

async function apiDropHinge  (id:string){
  let api=await  Api({
        url:"/json/DropHinge/"+id+"",
        method:'get',    
    }).then((res)=>{
       return res;
    });
    return api;
}

const apiFindHinge = (s:string)=>{
    Api({
        url:"/json/HingeByAll"+s+"",
        method:'get',    
    }).then((res)=>{
       return res;
    });
}


async function apiHingeByAll() {
   
    let response=await Api({
        url:'/json/HingeByAll',
        method:'post',    
    }).then((res)=>{
        return res;
    });
    return response;
}



export {apiHingeByAll,apiDropHinge,apiFindHinge,apiAddHinge,apiaddImage,apiupdateHinge}
