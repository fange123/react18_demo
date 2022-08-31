import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState:()=> {
    //* 初始化登录数据的时候可以先去本地存储里看看有没有，没有再使用初始值
  const token = localStorage.getItem('token')
  if(!token) {
      return {
      isLogged: false,
      token:'',
      user:null
    }
  }
  return {
      isLogged: true,
      token:token,
      user:JSON.parse(localStorage.getItem('user'))
    }
},
  reducers:{
    //* 往redux里面存数据
    login(state,action){
      state.isLogged = true
      state.token = action.payload.token
      state.user = action.payload.user

      //# 本地存储一份用户信息
      localStorage.setItem('token',state.token)
      localStorage.setItem('user',JSON.stringify(state.user))

    },
    logout(state){
      state.isLogged = false
      state.token = ''
      state.user = null

      //# 清空本地存储
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }
})

export const { login,logout } = authSlice.actions
