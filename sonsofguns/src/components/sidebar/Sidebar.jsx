import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className="sidebarTitle">About us</span>
          <img className='sidebarImg' src="./src/components/images/aboutusimg.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, doloribus soluta. Quibusdam ex, minima officia facilis ullam, consequuntur fugiat nemo hic labore error autem</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Join us</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">lorem</li>
            <li className="sidebarListItem">ipsum</li>
            <li className="sidebarListItem">dolor</li>
            <li className="sidebarListItem">sit</li>
            <li className="sidebarListItem">amet</li>
          </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
          <div className="siebarSocial">
          <i className="sidebarSocialIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarSocialIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
    </div>
  )
}

export default Sidebar