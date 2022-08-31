import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../store/reducer/authSlice'
import { useDispatch } from 'react-redux'

const MainMenu = () => {
  //* 通过useSelector获取（redux）state里面存储的数据
const auth = useSelector(state=>state.auth)
const dispatch = useDispatch()

  return (
    <main>
      <ul>
        <li><Link to='/'>首页</Link></li>
        {
          auth?.isLogged && <>
            <li><Link to='/' onClick={() => dispatch(logout())}>登出</Link></li>
            <li><Link to='profile'>{auth?.user?.username}的个人信息</Link></li> </>
        }
        {
          !auth?.isLogged && <li><Link to='auth-form'>登录/注册</Link></li>

        }

      </ul>

    </main>
  );
};

export default MainMenu;
