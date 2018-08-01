import axios from 'axios';
import {Toast} from 'antd-mobile';

axios.interceptors.request.use(config => {
    // element ui Loading方法
    Toast.loading('',0);
    return config
  }, error => {
    Toast.loading('加载超时',2,()=> {
        Toast.hide();
    })
    return Promise.reject(error)
  })
  // http响应拦截器
  axios.interceptors.response.use(data => {// 响应成功关闭loading
    Toast.hide();
    return data
  }, error => {
    Toast.loading('请求失败',2,()=> {
        Toast.hide();
    })
    return Promise.reject(error)
  })

export default axios;