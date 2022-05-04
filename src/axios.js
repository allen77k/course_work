import axios from "axios";

const baseConfigure = {
  // baseURL: "http://localhost:3000"
};

// 请求拦截器
axios.interceptors.request.use(req => {
  return req;
}, err => {
  return Promise.reject(err);
});

// 响应拦截器
axios.interceptors.response.use(res => {
  return res;
}, err => {
  return Promise.reject(err);
});

const request = function(options) {
  options = options || {};
  Object.assign(baseConfigure, options);
  return axios.create(baseConfigure);
};

export default request;