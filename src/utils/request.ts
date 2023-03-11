import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
axios.defaults.headers.post['Content-Type'] = 'application/json';
const Api = axios.create({
	url: '/api',
	baseURL: 'http://127.0.0.1:9527', //请求后端数据的基本地址，自定义
	timeout: 5000   //请求超时设置，单位ms
})
let loading = 0 as any;





Api.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	loading = ElLoading.service({
		fullscreen: true,
		lock: true,
		text: '加载中'
	});
	return config;
}, function (error) {
	// 对请求错误做些什么
	setTimeout(() => {
		loading.close();
	}, 1);
	ElMessage({
		type: 'error',
		message: error.message,
	})
	return Promise.reject(error);
});

// 添加响应拦截器
Api.interceptors.response.use(function (response) {
	// 2xx 范围内的状态码都会触发该函数。
	// 对响应数据做点什么
	setTimeout(() => {
		loading.close();
	}, 1);
	return response;
}, function (error) {
	// 超出 2xx 范围的状态码都会触发该函数。
	// 对响应错误做点什么
	setTimeout(() => {
		loading.close();
	}, 1);
	ElMessage({
		type: 'error',
		message: error.message,
	})
	return Promise.reject(error);
});


//导出我们建立的axios实例模块，ES6 export用法
export default Api