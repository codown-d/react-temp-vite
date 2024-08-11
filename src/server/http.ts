import axios, { AxiosInstance, AxiosResponse } from "axios";
import { debounce } from "lodash";
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export let messageEr = debounce((msg) => {
  message.error(msg);
}, 1000);
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
});
service.interceptors.request.use(
  (config) => {
    const assistantInfo = JSON.parse(localStorage.getItem("assistantInfo")||JSON.stringify({}))
    let {access_token} = assistantInfo
    if (access_token) {
      let lang = window.localStorage.getItem("lang") || "zh";
      config.headers["Authorization"] = "Bearer " + access_token; // 若token存在，则附加在请求头上
      config.headers["accept-language"] = lang; // 若token存在，则附加在请求头上
    }
    
    return config;
  },
  (error: any) => {
    // Output log
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.data.code != 1000) {
      messageEr(response.data.data||response.data.msg);
      return Promise.resolve(response.data);
    } else {
      return Promise.resolve(response.data); 
    }
  },
  (error) => {
    console.log(error)
    switch (error.response.status) {
      case 401:
        const urlState = JSON.parse(localStorage.getItem("urlState")||JSON.stringify({}))
        const navigate = useNavigate();
        if(urlState['assist_id']){
          navigate('/');
        }else{
          navigate('/error');
        }
        break;
      default:
    }
    return Promise.reject(error);
  }
);

export default service;
