import { createSlice } from "@reduxjs/toolkit";

//* 创建学生reducer切片

//* 配置对象：
//~  1.name:切片名字（最好避免重复）
//~  2.initialState:当前切片的初始值
//~  3.reducers:指定state的各种操作，直接添加操作state的方法

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    name: "zs",
    age: 18,
    gender: "男",
    address: "北京",
  },
  reducers: {
    setName(state, action) {
      //* 这里的state是个代理对象，可以直接修改，不需要复制
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = 20;
    },
  },
});

//* 切片对象会帮助我们自动生成action
export const { setName, setAge } = studentSlice.actions;

//* setName, setAge是函数，调用后返回一个action对象
//* action对象的结构：{type:'name/函数名',payload:函数的参数}

//* 到处reducer
export const { reducer: studentReducer } = studentSlice;
