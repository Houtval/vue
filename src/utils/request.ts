import axios from 'axios'
import { ElMessage } from 'element-plus'
//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
axios.defaults.headers.post['Content-Type'] = 'application/json';
const Api = axios.create({
	url:'/api',
	baseURL:'http://127.0.0.1:9527', //请求后端数据的基本地址，自定义
	timeout: 2000   //请求超时设置，单位ms
})




//导出我们建立的axios实例模块，ES6 export用法
export default Api