import { createApi } from '@reduxjs/toolkit/dist/query/react'

import axios from "axios";

// 自定义一个axiosBaseQuery
const axiosBaseQuery = ({ baseUrl }) => {
  return ({ url, method, data, params }) => {
    // 调用axios代码查询数据
    return axios({
      url: baseUrl + url,
      method,
      data,
      params,
    });
  };
};

export const authApi = createApi({
  reducerPath:'authApi',
  baseQuery:axiosBaseQuery({
    baseUrl:'http://localhost:1337/api/'
  }),
  endpoints:(build)=>{
    return {
      register:build.mutation({
        query(user){
          return {
              url:'auth/local/register',
              method: 'POST',
              data:user
          }
        }
      }),
      login:build.mutation({
        query(user){
          return {
              url:'auth/local',
              method: 'POST',
              data:user
          }
        }
      }),

    }
  }

})

export const { useRegisterMutation ,useLoginMutation} = authApi
