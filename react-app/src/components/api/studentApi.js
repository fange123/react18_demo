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
      getStudents: build.query({
        query() {
          return {
            method: "GET",
            url: "students",
          };
        },
      }),
    };
  },
});

console.log("studentApi", studentApi);
export const { useGetStudentsQuery } = studentApi;
