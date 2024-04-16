import React, { useEffect, useState } from 'react'
import APIKit from '././../../components/WebApiSpotify/spotify'
import './library.css'
import { IconContext } from 'react-icons';
// import { AiFillPlayCircle } from 'react-icons/ai'
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const Library = () => {

  const [playlists , setPlaylists] = useState(null);

  useEffect(()=>{

    APIKit.get('me/playlists').then(function(response){
      setPlaylists(response.data.items);
      console.log(response.data.items);
     });
   
  },[])

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate('/player', {state: {id: id }})
  }

  return (
    <div className='screen-container'>
      <div className='library-body'>
      {playlists?.map((playlist)=>(
        <div key={playlist.id}  className='playlist-card' onClick={()=> playPlaylist(playlist.id) }>

        <img className='playlist-image' src={playlist.images[0].url} alt="Playlist-Art" />
        <p className='playlist-title'>{playlist.name}</p>
        <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
        <div className='playlist-fade'>
          <IconContext.Provider value={{size:"3rem" , color:"EBE76C"}}>
          <AiFillPlayCircle />
          </IconContext.Provider>
        </div>
        </div>
      )
        
      )}
      </div>
      
    </div>
  )
}

export default Library
