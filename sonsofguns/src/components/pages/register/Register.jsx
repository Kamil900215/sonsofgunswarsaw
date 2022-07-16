import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" placeholder='username'/>
            <label>E-mail</label>
            <input type="text" placeholder='e-mail'/>
            <label>Password</label>
            <input type="password" placeholder='Password'/>
            <button className='registerButton'>Register</button>
        </form>
        <button className='registerLogInButton'>
        <Link className='link' to="/login">LOGIN</Link>
        </button>
        </div>
  )
}

export default Register