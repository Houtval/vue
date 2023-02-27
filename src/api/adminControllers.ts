import Api from '../utils/request'

const apiLogin = (Id:string,Password:string)=>{
    Api({
        url:'/login',
        method:'post',  
        params:{
            id:Id,
            password:Password
        }  
    }).then((res)=>{
       return res;
    });
}

export {apiLogin}