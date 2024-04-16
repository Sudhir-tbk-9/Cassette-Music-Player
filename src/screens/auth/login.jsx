import React from 'react'
import { loginEndpoint } from '../../components/WebApiSpotify/spotify'
import './login.css'

const Login = () => {
  return (
    <div className='login-page'>
      {/* <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="logo-spotify" className="logo"/> */}
      <img src="/src/assets/Images/RadioGorillaEnhanced.png" alt="logo" className='logo' />
      <a href={loginEndpoint}>
        <div className='login-btn'>Log In</div>
      </a>
    </div>
  )
}


export default Login