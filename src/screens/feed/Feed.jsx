import React, { useEffect, useState } from 'react';
import apiClient from '../../components/WebApiSpotify/spotify';
import './feed.css'
import { Link, useNavigate } from 'react-router-dom';


const Feed = () => {

  const navigate = useNavigate();

  const [releases, setReleases] = useState([]);

  useEffect(() => {
    apiClient.get('/browse/new-releases')
      .then((resp) => {
        const a = resp.data.albums.items;
        setReleases(a);
      })
      .catch((error) => {
        console.error('Error fetching new releases:', error);
      });
  }, []);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const AlbumCard = ({ item }) => {
    const cardStyle = {
      border: '1px solid #ccc',
      borderRadius: '20px',
      padding: '14px',
      margin: '6px',
      width: '320px',
      boxShadow: '0 4px 19px black',
      fontFamily: 'cursive',
      textAlign:"center",
      transform:'scale(0.8)'
    };

    const imageStyle = {
      width: '100%',
      borderRadius: '20px',
      marginBottom: '8px',
    };

    const textStyle = {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '8px',
      // justifyContent :'center',
      // textAlign:"center"
    };

   

    // const leadToPlayer = (songId) => {
    //   navigate('/Player/{songId}')
    // }  
  

    return (
      <Link to={'/Player/${item.id}'} style={{ textDecoration: 'none', color: 'inherit' }}>
        {console.log("albumIds in feed : " ,item.id )}
      <div className='album-card' style={cardStyle}>
        <img src={item.images[0].url} alt={item.name} style={imageStyle} />
        <div style={textStyle}>{item.name}</div>
        <div>Album Type: {item.album_type}</div>
        <div>Total Tracks: {item.total_tracks}</div>
        <div>Release Date: {item.release_date}</div>
        <div className="album-info">
              <div className="album-name">{item.name}</div>
              <div className="album-artist">Artist: {item.artists[0].name}</div>
            </div>
      </div>
      </Link>
    );
  };
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <div className='screen-container' style={{  }}>
      <div className='feed-body' style={{justifyContent:"space-around",overflowX:"hidden",overflowY: 'scroll', maxHeight: 'calc(100vh - 10px)' ,scrollBehavior:"smooth"}}>
      {releases.map((item) => (
        // <div className='album-card' key={item.id} onClick={() => leadToPlayer(item.id)}>
        <div className='album-card' key={item.id}>
        <AlbumCard item={item} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Feed;