import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSmall'>React & node</span>
            <span className='headerTitleLarge'>Blog</span>
        </div>
    <img className='headerImage' src=".\src\components\images\headerimg1.jpg" alt="" />
    </div>
  )
}

export default Header