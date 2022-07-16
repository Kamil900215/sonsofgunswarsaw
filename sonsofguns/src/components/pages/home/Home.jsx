import React from 'react'
import Header from '../../header/Header'
import Post from '../../posts/Post'
import Sidebar from '../../sidebar/Sidebar'
function Home() {
  return (<>
    <Header />
    <div className='home'>
      <Post />
      <Sidebar />
        </div>
        </>)
}

export default Home