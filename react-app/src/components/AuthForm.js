import React,{useRef,useState} from 'react';
import { useRegisterMutation ,useLoginMutation}  from '../store/api/AuthApi'
import { useNavigate} from 'react-router-dom'

const AuthForm = () => {
  const nav = useNavigate()
  const [isLogin,setIsLogin] = useState(false)
  //* 引入注册的钩子函数
    const [register,{error:regError}] = useRegisterMutation()
    const [login,{error:loginError}] = useLoginMutation()

  const userNameRef = useRef(null)
  const pwdRef = useRef(null)
  const emailRef = useRef(null)

  const handelSubmit = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value
    const password = pwdRef.current.value
    //处理登录功能
    if(isLogin){
      login({identifier:username,password}).then(res=> {
        if(!res.error){
        //登录成功
        nav('/profile')
        }
      })
    }else {
    const email = emailRef.current.value
      register({username, email,password}).then(res=> {
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
