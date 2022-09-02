import axios from "axios";

// 自定义一个axiosBaseQuery
const request = ({ baseUrl,headers }) => {
  return ({ url, method, data, params, }) => {
    // 调用axios代码查询数据
    return axios({
      url: baseUrl + url,
      method,
      data,
      params,
      headers

    });
  };
};

export default request
