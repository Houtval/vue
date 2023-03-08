import Api from '../utils/request'

const apiAddFirstMenu = (s:string)=>{
    Api({
        url:'/addFirstMenu',
        method:'post',  
        params:{
           S:s
        }  
    }).then((res)=>{
       return res;
    });
}

const apiAddSecondMenu = (s:string[])=>{
    Api({
        url:'/addSecondMenu',
        method:'post',  
        params:{
           S:s
        }  
    }).then((res)=>{
       return res;
    });
}

const apiAlterFirstMenu = (s:string[])=>{
    Api({
        url:'/alterFirstMenu',
        method:'post',  
        params:{
           S:s
        }  
    }).then((res)=>{
       return res;
    });
}

const apiAlterSecondMenu = (s:string[])=>{
    Api({
        url:'/alterSecondMenu',
        method:'post',  
        params:{
           S:s
        }  
    }).then((res)=>{
       return res;
    });
}

const apiDeleteFirstMenu = (s:string)=>{
    Api({
        url:'/deleteFirstMenu',
        method:'post',  
        params:{
           S:s
        }  
    }).then((res)=>{
       return res;
    });
}

const apiDeleteSecondMenu = (s:string[])=>{
    Api({
        url:'/deleteSecondMenu',
        method:'post',  
        params:{
           S:s
        }  
    }).then((res)=>{
       return res;
    });
}

async function apiGetAllMenu(){
  let api= await Api({
        url:'MenuController/getList',
        method:'post',  
    }).then((res)=>{
       return res;
    });
    return api;
}

export {apiAddFirstMenu,apiAddSecondMenu,apiAlterFirstMenu,apiAlterSecondMenu,apiDeleteFirstMenu,apiDeleteSecondMenu,apiGetAllMenu}
