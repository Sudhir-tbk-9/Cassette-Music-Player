import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Favorite from '../favorite/Favorite'
import Trending from '../trending/Trending'
import Feed from '../feed/Feed'
// import Player from './../player/index'
import Player from '../player'

import Sidebar from '../../components/sidebar'
import Login from '../auth/login'
import './Home.css'
import '../../shared/globalStyle.css'
import { setClientToken } from '../../components/WebApiSpotify/spotify'
import Library from '../library'

const Home = () => {
  
  const [token , setToken] = useState("");

  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash="" ;

    if(!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
      console.log(hash.split("&")[0].split("=")[1]);
      window.localStorage.setItem("token" , _token);
      setToken(_token);
      setClientToken(_token)
    }
    else{
      setToken(token);
      setClientToken(token);
    }

  },[])

  return !token ? (
  
  <Login></Login>
  ) :
  (
    <div>
    <Router>
      <div className='main-body'>
        <Sidebar></Sidebar>
        <Routes>
            <Route path='/' element={<Library></Library>}></Route>
            <Route path='/Feed' element={<Feed></Feed>}></Route>
            <Route path='/Trending' element={<Trending></Trending>}></Route>
            <Route path='/Player' element={<Player></Player>} />
            <Route path='/Player/${item.id}' element={<Player></Player>} />
            <Route path='/Favorite' element={<Favorite></Favorite>}></Route>
           
        </Routes>
        </div>
    </Router>
    </div>
  )
}

export default Home
