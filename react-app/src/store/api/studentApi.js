import { createApi } from "@reduxjs/toolkit/dist/query/react";
import request from '../../utils/request'

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: request({
    baseUrl: "http://localhost:1337/api/",
    headers:{
    'Authorization':`Bearer ${localStorage.getItem('token')}`
  }
  }),
  //* 声明表情类型
  tagTypes: ["student"],
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

        //* 查询功能提供的标签
        providesTags: [
          {
            type: "student",
            id: "LIST",
          },
        ],
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
        keepUnusedDataFor: 60, //* 不进行请求缓存，根据实际需要修改缓存的事件
        //* 还可以精准的打标签
        providesTags: (result, err, id) => [
          {
            type: "student",
            id,
          },
        ],
      }),

      deleteStudent: build.mutation({
        query(id) {
          return {
            method: "DELETE",
            url: `students/${id}`,
          };
        },
        invalidatesTags: [
          {
            type: "student",
            id: "LIST",
          },
        ],
      }),

      addStudent: build.mutation({
        query(stu) {
          return {
            method: "POST",
            url: "students",
            data: { data: stu }, //TODO:一定要有data
          };
        },
        //* 使使用了该标签的查询失效，从而触发再次查询
        invalidatesTags: [
          {
            type: "student",
            id: "LIST",
          },
        ],
      }),

      updateStudent: build.mutation({
        query(stu) {
          return {
            url: `students/${stu.id}`,
            method: "PUT",
            data: { data: stu.attributes },
          };
        },
        invalidatesTags: (stu) => [
          {
            type: "student",
            id: stu.id,
          },
        ],
      }),
    };
  },
});

export const {
  useGetStudentsQuery,
  useGetStudentByIdQuery,
  useDeleteStudentMutation,
  useAddStudentMutation,
  useUpdateStudentMutation,
} = studentApi;
