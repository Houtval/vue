import Api from '../utils/request'

const apicorporation = ()=>{
    Api({
        url:'/corporation',
        method:'post',  
    }).then((res)=>{
       return res;
    });
}

export {apicorporation}