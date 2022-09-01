import { createApi } from '@reduxjs/toolkit/dist/query/react'
import request from '../../utils/request'

export const authApi = createApi({
  reducerPath:'authApi',
  baseQuery:request({
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
