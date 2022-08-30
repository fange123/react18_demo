import React from 'react';
import { Link } from 'react-router-dom'

const MainMenu = () => {
  return (
    <main>
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='profile'>个人信息</Link></li>
        <li><Link to='auth-form'>登录</Link></li>
      </ul>

    </main>
  );
};

export default MainMenu;
