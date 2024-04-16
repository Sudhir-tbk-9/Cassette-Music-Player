import React from 'react'
import "./SongCard.css"
import AlbumImage from './albumImage'
import AlbumInfo from './albumInfo'


const SongCard = ({album}) => {
  return (
    <div className='songCard-body flex'>
      <AlbumImage url={album?.images[0]?.url}></AlbumImage>
      <AlbumInfo album={album}></AlbumInfo>
    </div>
  )
}

export default SongCard
