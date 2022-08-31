import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { AuthApi } from './api/AuthApi'
import { authSlice } from './reducer/authSlice'

const store = configureStore({
  reducer:{
      [AuthApi.reducerPath]:AuthApi.reducer,
      auth:authSlice.reducer
  },
  middleware:(getDefaultMiddleware=>getDefaultMiddleware().concat(AuthApi.middleware))

})
  setupListeners(store.dispatch)//* 处理缓存的问题，失效重新加载数据


export default store
