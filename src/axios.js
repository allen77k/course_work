import axios from "axios";

// 基础配置
const axiosConfigure = {
  baseURL: "http://localhost:3000/api"
};

const Axios = axios.create();

// 请求拦截器
Axios.interceptors.request.use(req => {
  return req;
}, err => {
  return Promise.reject(err);
});

// 响应拦截器
Axios.interceptors.response.use(res => {
  return res;
}, err => {
  console.log(err);
  return Promise.reject(err);
});

// 封装后的请求函数
const request = async function(options = {}, bind, callback) {
  Object.assign(axiosConfigure, options); // 合并配置项
  const res = await Axios(axiosConfigure); // 发出ajax请求
  this[bind] = res.data;  // 为this上的某个变量绑定值
  if (typeof callback === "function") callback(res.data); // 如果有回调，就将值传入回调并使用回调函数
};

export default request;