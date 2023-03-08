import Api from '../utils/request'



async function apiLogin(Id:string,Password:string) {
   
    let api= await Api({
        url:'/AdminController/login',
        method:'post',  
        params:{
            id:Id,
            password:Password
        }  
    }).then((res)=>{
       return res;
    });
    return api;
}




async function apiUpdatePassword(Id:string,Password:string) {
   
  let api= await Api({
        url:'/AdminController/updatePassword',
        method:'post',  
        params:{
            id:Id,
            password:Password
        }  
    }).then((res)=>{
       return res;
    });
    return api;
 }

export {apiLogin,apiUpdatePassword}