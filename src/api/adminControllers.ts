import Api from '../utils/request'



async function apiLogin(Id:string,Password:string) {
   
    let api= await Api({
        url:'/login',
        method:'post',  
        data:{
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
        url:'/updatePassword',
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