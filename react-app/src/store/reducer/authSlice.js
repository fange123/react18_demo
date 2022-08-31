import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    isLogged: false,
    token:'',
    user:null
  },
  reducers:{
    //* 往redux里面存数据
    login(state,action){
      state.isLogged = true
      state.token = action.payload.token
      state.user = action.payload.user

    },
    logout(state){
      state.isLogged = false
      state.token = ''
      state.user = null
    }
  }
})

export const { login,logout } = authSlice.actions
