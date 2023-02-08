//* 创建store
import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "./studentSlice";

//TODO: create reducer
// const reducer = combineReducers({
// studentReducer;
// xxReducer;
// xxxxReducer;

// });

export default configureStore({
  reducer: {
    student: studentReducer,
    //* 切片多了可以使用combineReducers
  },
});
