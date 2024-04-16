import { useEffect, useState } from 'react'
import './player.css'
import { useLocation, useParams } from 'react-router-dom'
import apiClient from '../../components/WebApiSpotify/spotify'
import SongCard from '../../components/songCard'
import Queue from '../../components/queue'
import "./../../shared/globalStyle.css"
import AudioPlayer from '../../components/audioPlayer'
import Widgets from '../../components/widgets'
const Player = () => {

  const location = useLocation();
  
  // console.log("location : " , location);
  
  const [tracks , setTracks] = useState([]);
  const [currentTrack , setCurrentTrack] = useState({});
  const [currentIndex , setCurrentIndex] = useState(0);


  const { albumId } = useParams();
  console.log("album  ID IS : " + albumId )
  useEffect(() => {
    if (albumId) {
      apiClient.get(`/albums/${albumId}/tracks`)
        .then((resp) => {
          setTracks(resp.data.items);
        })
        .catch((error) => {
          console.error('Error fetching album tracks:', error);
        });
    }
  }, [albumId]);


  useEffect(() => {
  
    if (location.state) {
      console.log("State exists: ", location.state);

      apiClient.get("playlists/" + location.state?.id + "/tracks")
                    //playlists/{playlist_id}/tracks
        .then((resp) =>{
          setTracks(resp.data.items);
          console.log(resp.data.items)
          
          setCurrentTrack(resp.data?.items[0]?.track);
          console.log(resp.data?.items[0]?.track)

        })
        .catch(error => console.error("Error fetching data: ", error));
    }
    else{
      console.log("location state is empty")
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);


  return (
    <div className='screen-container flex'>

    <div className='left-player-body'>
        <AudioPlayer
        currentTrack={currentTrack}
        total={tracks}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        >
        </AudioPlayer>

      <Widgets artistID={currentTrack?.album}></Widgets>
    
    
    </div>

    <div className='right-player-body'>

        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
     

      {/* {console.log("current Track : " , currentTrack)}
      <SongCard albumProp={currentTrack.album}></SongCard>
     
      <Queue tracksprop={tracks} setCurrentIndex={setCurrentIndex}></Queue>
      {console.log("player tracksProp : " , tracks)}
      {console.log("player setCurrentIndexprop : " , setCurrentIndex)} */}
    </div>
    </div>

  )
}

export default Player