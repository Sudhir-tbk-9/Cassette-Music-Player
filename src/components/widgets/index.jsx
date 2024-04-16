import React, { useEffect, useState } from 'react'
import './widgets.css'
import apiClient from '../WebApiSpotify/spotify';
import WidgetCard from './widgetCard';
import { Link } from 'react-router-dom';


const Widgets = (artistID) => {
    
  console.log("artist id to get similar : ",artistID)

    const [similar , setSimilar] = useState([]);

    const [featured, setFeatured] = useState([])

    const [newRelease , setNewRelease] = useState([]);

    // const id = artistID?.artists[0]?.id ;
    // console.log("id temp store : ", id)
   
    useEffect(()=> {

    //     if(artistID){
    //         apiClient.get(`/artists/${artistID}/related-artists`).then(res => {
    //             const a = res.data?.artists.slice(0,3);
    //             console.log('data in A1' ,a)
                
    //             setSimilar(a);
    //         }).catch((err) => console.error(err))

    //         apiClient.get(`/browse/featured-playlists`).then(res => {
    //             const a = res.data?.playlists.items.slice(0,3);
    //             console.log('data in A2' ,a)
                
    //             setFeatured(a);
    //         }).catch((err) => console.error(err))

    //         apiClient.get(`/browse/new-release`).then(res => {
    //             const a = res.data?.albums.items.slice(0,3);
    //             console.log('data in A3' , a)
              
    //             setNewRelease(a);
    //         }).catch((err) => console.error(err))
    //       }
    // },[artistID])

    if (artistID) {

      apiClient
        .get(`/artists/${artistID}/related-artists`)
        .then((res) => {
          const a = res.data?.artists.slice(0, 3);
          console.log('data in A1' ,a)
                
          setSimilar(a);
        })
        .catch(() => console.log("here i am causing problem in similar or related artist  card"));

      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 3);
          console.log('data in A2' ,a)
                
          setFeatured(a);
        })
        .catch((err) => console.error(err));

      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums.items.slice(0, 3);
          console.log('data in A3' ,a)
                
          setNewRelease(a);
        })
        .catch((err) => console.error(err));
    }
  }, [artistID]);


  return (
    <div className='widgets-body flex'>
    <Link to="/Favorite">
      <WidgetCard title="Similar Artists" similar={similar}></WidgetCard>
    </Link>

    <Link to="/Trending">
      <WidgetCard title="Made For You" featured={featured}></WidgetCard>
    </Link>

    <Link to="/Feed">
      <WidgetCard title="New Releases" newRelease={newRelease}></WidgetCard>
    </Link>
    </div>
  )
}

export default Widgets
