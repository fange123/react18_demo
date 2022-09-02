import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


// * 这个组件用来判断有没有权限
const NeedAuth = (props) => {
  const location = useLocation()
  const auth = useSelector(state=>state.auth)
  //*把重定向之前的url信息传过去,state属性就是传递信息用的
  return auth?.isLogged ? props.children : <Navigate to='/auth-form' replace state={{ prevLocation: location}}/>
};

export default NeedAuth;
