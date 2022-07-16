import React from "react";
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/home/Home'
import Single from './components/pages/singlepage/Single'
import WritePost from "../src/components/pages/writepost/WritePost";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Joinus from "./components/pages/joinus/Joinus";


import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const user = true;


  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path='/register' element={ user ? <Home /> : <Register />} />
          <Route path='/login' element={user ? <Home/> : <Login />} />
          <Route path='/writepost' element={user ? <WritePost /> : <Register/>} />
          <Route path='/settings' element={user ? <Settings /> : <Register />} />
          <Route path='/post/:postId' element={<Single />} />
          <Route path='/joinus' element={<Joinus />} />
      </Routes>
    </Router>)
}

export default App
