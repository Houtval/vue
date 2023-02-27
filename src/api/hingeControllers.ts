import Api from '../utils/request'

const apiAddHinge = (
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
    url:string
    )=>{
    Api({
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
            "url": url
          }
    }).then((res)=>{
       return res;
    });
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

const apiDropHinge = (id:string)=>{
    Api({
        url:"/json/HingeByAll"+id+"",
        method:'get',    
    }).then((res)=>{
       return res;
    });
}

const apiFindHinge = (s:string)=>{
    Api({
        url:"/json/HingeByAll"+s+"",
        method:'get',    
    }).then((res)=>{
       return res;
    });
}

const apiHingeByAll = ()=>{
    Api({
        url:'/json/HingeByAll',
        method:'post',    
    }).then((res)=>{
       return res;
    });
}

export {apiHingeByAll,apiDropHinge,apiFindHinge,apiAddHinge,apiaddImage}
