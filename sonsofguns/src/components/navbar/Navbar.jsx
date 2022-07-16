import React from 'react'
import { Link } from 'react-router-dom'


function navbar() {

  const user = true; 

  return (
    <div className='navbar'>
      <div className="topLeft">
      <i className="socials fa-brands fa-facebook-square"></i>
      <i className="socials fa-brands fa-instagram-square"></i>
      l</div>
      <div className="topCenter">
        <ul className="navbarList">
          <li className='item'>
            <Link className='link' to='/' >HOME</Link>
          </li>
          <li className='item'>
          <Link className='link' to='/blog' >BLOG</Link>
          </li>
          <li className='item'>
          <Link className='link' to='/joinus' >JOIN US</Link>
          </li>
          <li className='item'>
          <Link className='link' to='/writepost' >WRITE</Link>
          </li>
          <li className='item'>
            {user ? 'LOGOUT' : 'LOG IN'}
          </li>
          
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className='profileImg' src=".\src\components\images\logononame.jpg" alt="" /> 
          ) : (
            <ul className='navbarList'>
              <li className="item">
                <Link className='link' to='/login'>LOGIN</Link>
              </li>
              <li className="item">
                <Link className='link' to='/register'>REGISTER</Link>
            </li>
            </ul>
          )
        }
        
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>  
    </div>
  )
}

export default navbar