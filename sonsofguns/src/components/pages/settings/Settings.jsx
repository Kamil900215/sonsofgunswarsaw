import React from 'react'
import Sidebar from '../../sidebar/Sidebar'


function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete your account</span>
            </div>
            <form className='settingForm'>
                <label>Profile picture</label>
                <div className="settingsProfilePicture">
                    <img className='settingsAddedProfilePic' src="./src/components/images/logononame.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsProfilePictureIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}/>
                </div>
                <label htmlFor="">User name</label>
                <input type="text" placeholder='Name'/>
                <label htmlFor="">e-mail</label>
                <input type="email" placeholder='qwe@dsa.com'/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password'/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
        </div>
  )
}

export default Settings