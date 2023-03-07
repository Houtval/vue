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

async function apiDelete(Id:string){
    let api= Api({
        url:'/Delete',
        method:'post',  
        params:{
            id:Id 
        }  
    }).then((res)=>{
       return res;
    });
    return api;
}

async function apiInsertSlide  (
    Application:string,
    Charcteristic:string,
    Id:string,Life:string,
    Loads:string,Material:string,
    Model:string,Name:string,
    Section:string,Size:string,
    Specifications:string,
    ){
   let api=await Api({
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
        }  
    }).then((res)=>{
       return res;
    });
    return api;
}


async function apiUpdateSlide  (
    Application:string,
    Charcteristic:string,
    Id:string,Life:string,
    Loads:string,Material:string,
    Model:string,Name:string,
    Section:string,Size:string,
    Specifications:string,
    ){
   let api=await Api({
        url:'/updateSlide',
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
        }  
    }).then((res)=>{
       return res;
    });
    ;
    return api;
}


async function apiSelectAll (){
     const api=await Api({
        url:'/SelectAll',
        method:'post',  
       
    }).then((res)=>{
       return res;
    });
    return api;
}

async function apiSelectByAll(s:string){
   await Api({
        url:'/SelectByAll',
        method:'post',  
        params:{
            S:s
        }
       
    }).then((res)=>{
       return res;
    });
}




export {
    apiUpdateSlide,
    apiaddArticle,
    apiDelete,
    apiInsertSlide,
    apiSelectAll,
    apiSelectByAll,
    }