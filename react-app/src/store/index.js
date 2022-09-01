import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from './api/AuthApi'
import { studentApi } from "./api/studentApi";
import { authSlice } from './reducer/authSlice'

const store = configureStore({
  reducer:{
      [authApi.reducerPath]:authApi.reducer,
      [studentApi.reducerPath]:studentApi.reducer,
      auth:authSlice.reducer
  },
  middleware:(getDefaultMiddleware=>getDefaultMiddleware().concat(authApi.middleware,studentApi.middleware))

})
  setupListeners(store.dispatch)//* 处理缓存的问题，失效重新加载数据


export default store
