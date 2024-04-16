import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarButton from './SidebarButton'
import { MdSpaceDashboard } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import apiClient from '../WebApiSpotify/spotify';

const Sidebar = () => {

  const [image , setImage] = useState(
    "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
    // "https://sguru.org/wp-content/uploads/2017/06/cool-anime-profile-pictures-41e23cccf0ca615cf297fc03235ceb48-manga-girl-manga-anime.jpg"
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
    // "https://sguru.org/wp-content/uploads/2017/06/cool-anime-profile-pictures-41e23cccf0ca615cf297fc03235ceb48-manga-girl-manga-anime.jpg"
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
    
  );

  useEffect(()=> {
    apiClient.get("me").then((response) => {
      console.log("response.data below ----" , response.data);
      // setImage(response.data.images[0].url);

      if (response.data.images && response.data.images.length > 0) {
        console.log("profile img : " , response.data.images[0].url)
        setImage(response.data.images[1].url);
      } else {
        console.error("No images found in the response");
        setImage( "https://sguru.org/wp-content/uploads/2017/06/cool-anime-profile-pictures-41e23cccf0ca615cf297fc03235ceb48-manga-girl-manga-anime.jpg"
        )
      }
    }).catch(error => {
      console.error("Error fetching profile image:", error);
    });
    
  },[])

  return (
    <div className='sidebar-container'>
      <img src={image}
      className='profile-img'
      alt='profile'></img>

    <div>
        <SidebarButton title="Feed" to="/Feed" icon={<MdSpaceDashboard />}></SidebarButton>
        <SidebarButton title="Trending" to="/Trending" icon={<FaFire />}></SidebarButton>
        <SidebarButton title="Player" to="/Player" icon={<BsFillMusicPlayerFill />}></SidebarButton>
        <SidebarButton title="Favorite" to="/Favorite" icon={<MdFavorite />}></SidebarButton>
        <SidebarButton title="Library" to="/" icon={<MdLibraryMusic />}></SidebarButton>
    </div>
    <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}></SidebarButton>
    </div>
  )
}

export default Sidebar
