import { createApi } from "@reduxjs/toolkit/dist/query/react";
import axios from "axios";

// 自定义一个axiosBaseQuery
const axiosBaseQuery = ({ baseUrl }) => {
  return ({ url, method, data }) => {
    // 调用axios代码查询数据
    return axios({
      url: baseUrl + url,
      method,
      data,
    });
  };
};

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:1337/api/",
  }),
  endpoints: (build) => {
    return {
      //+ 获取所有学生信息
      getStudents: build.query({
        query() {
          return {
            url: "students",
          };
        },
        //* transformResponse用来转换返回的数据格式
        transformResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data;
        },
      }),

      getStudentById: build.query({
        query(id) {
          return {
            url: `students/${id}`,
          };
        },
        transformResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data;
        },
        keepUnusedDataFor: 0, //* 不进行请求缓存，根据实际需要修改缓存的事件
      }),

      deleteStudent: build.mutation({
        query(id) {
          return {
            method: "DELETE",
            url: `students/${id}`,
          };
        },
      }),
    };
  },
});

export const {
  useGetStudentsQuery,
  useGetStudentByIdQuery,
  useDeleteStudentMutation,
} = studentApi;
