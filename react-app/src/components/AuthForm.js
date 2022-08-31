import React,{useRef,useState } from 'react';
import { useRegisterMutation ,useLoginMutation}  from '../store/api/AuthApi'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login,logout } from '../store/reducer/authSlice'

const AuthForm = () => {

  const [isLogin,setIsLogin] = useState(false)
  //* 引入注册的钩子函数
    const [registerFn,{error:regError}] = useRegisterMutation()
    const [loginFn,{error:loginError}] = useLoginMutation()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

  const userNameRef = useRef(null)
  const pwdRef = useRef(null)
  const emailRef = useRef(null)

  //* 根据之前的url判断当前的url
  const from = location?.state?.prevLocation?.pathname || '/'

  const handelSubmit = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value
    const password = pwdRef.current.value
    //处理登录功能
    if(isLogin){
      loginFn({identifier:username,password}).then(res=> {
        if(!res.error){
        //登录成功
        dispatch(login({
          user:res.data.user,
          token:res.data.jwt,
        }))

        navigate(from,{replace:true})
        }
      })
    }else {
    const email = emailRef.current.value
      registerFn({username, email,password}).then(res=> {
        if(!res.error){
        //注册成功
        setIsLogin(true)
        }
      })
    }


  }
  return (
    <div>
      <p style={{color: 'red'}}>
        {regError && '用户名或者邮件重复'}
        {loginError && '登录失败，请重试'}
      </p>
      <h2>{isLogin ? '登录' :'注册'}</h2>
      <form onSubmit={handelSubmit}>
        <div>
          <input type="text" placeholder="用户名" ref={userNameRef}/>
       </div>
        {
          !isLogin && <div>
          <input type="email" placeholder="邮箱" ref={emailRef}/>
       </div>
        }
        <div>
          <input type="password" placeholder="密码" ref={pwdRef}/>
       </div>
       <div>
        <button>{isLogin ? '登录' :'注册'}</button>
        <a href="#" onClick={(e)=> {
            e.preventDefault()
            setIsLogin(!isLogin)
        }}>
          {
            isLogin ? '没有账号？点击注册' :'已有账号，点击登录'
            }
        </a>
       </div>
      </form>
    </div>
  );
};

export default AuthForm;
