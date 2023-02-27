import Api from '../utils/request'
const apiaddArticle=(File:FormData,Url:string)=>{
    Api({
        url:'/addArticle',
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

const apiDelete = (Id:string)=>{
    Api({
        url:'/Delete',
        method:'post',  
        params:{
            id:Id 
        }  
    }).then((res)=>{
       return res;
    });
}

const apiInsertSlide = (
    Application:string,
    Charcteristic:string,
    Id:string,Life:string,
    Loads:string,Material:string,
    Model:string,Name:string,
    Section:string,Size:string,
    Specifications:string,
    Url:string)=>{
    Api({
        url:'/InsertSlide',
        method:'post',  
        params:{
            application:Application,
            charcteristic:Charcteristic,
            id:Id, 
            life:Life,
            loads:Loads,
            material:Material,
            model:Model,
            name:Name,
            section:Section,
            size:Size,
            specifications:Specifications,
            url:Url
        }  
    }).then((res)=>{
       return res;
    });
}

const apiSelectAll = ()=>{
    Api({
        url:'/SelectAll',
        method:'post',  
       
    }).then((res)=>{
       return res;
    });
}

const apiSelectByAll = (s:string)=>{
    Api({
        url:'/SelectByAll',
        method:'post',  
        params:{
            S:s
        }
       
    }).then((res)=>{
       return res;
    });
}

const apiSelectByApplication = (Application:string)=>{
    Api({
        url:'/SelectByApplocation',
        method:'post',  
        params:{
            application:Application
        }
       
    }).then((res)=>{
       return res;
    });
}

const apiSelectByCharacteristic =(Characteristic:string)=>{
    Api({
        url:'/SelectByCharacteristic',
        method:'post',  
        params:{
            characteristic:Characteristic
        }
       
    }).then((res)=>{
       return res;
    });
}

const apiSelectById=(Id:string)=>{
    Api({
        url:'/SelectById',
        method:'post',  
        params:{
            id:Id
        }
       
    }).then((res)=>{
       return res;
    });
}

const apiSelectByLoads=(Load:string)=>{
    Api({
        url:'/SelectByLoads',
        method:'post',  
        params:{
            load:Load
        }
       
    }).then((res)=>{
       return res;
    });
}

const apiSelectByMaterial=(Material:string)=>{
    Api({
        url:'/SelectByMaterial',
        method:'post',  
        params:{
            material:Material
        }
       
    }).then((res)=>{
       return res;
    });
}
const apiSelectByName=(Name:string)=>{
    Api({
        url:'/SelectByName',
        method:'post',  
        params:{
            name:Name
        }
       
    }).then((res)=>{
       return res;
    });
}

const apiSelectBySection=(Section:string)=>{
    Api({
        url:'/SelectBySection',
        method:'post',  
        params:{
            section:Section
        }
       
    }).then((res)=>{
       return res;
    });
}

const apiSelectBySpecifications=(Specifications:string)=>{
    Api({
        url:'/SelectBySection',
        method:'post',  
        params:{
            speechSynthesis:Specifications
        }
       
    }).then((res)=>{
       return res;
    });
}


export {
    apiaddArticle,
    apiDelete,
    apiInsertSlide,
    apiSelectAll,
    apiSelectByAll,
    apiSelectByApplication,
    apiSelectByCharacteristic,
    apiSelectById,
    apiSelectByLoads,
    apiSelectByMaterial,
    apiSelectByName,
    apiSelectBySection,
    apiSelectBySpecifications}