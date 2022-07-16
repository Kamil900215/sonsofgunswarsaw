import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>E-mail</label>
            <input type="text" placeholder='e-mail'/>
            <label>Password</label>
            <input type="password" placeholder='Password'/>
            <button className='logInButton'>Log in</button>
        </form>
        <button className='registerInButton'>
          <Link className='link' to="/register">REGISTER</Link>
        </button>
        </div>
  )
}

export default Login