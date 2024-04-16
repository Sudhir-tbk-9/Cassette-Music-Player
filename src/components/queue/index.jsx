import React from 'react'
import './queue.css'


const Queue = ({tracks, setCurrentIndex}) => {

  console.log("queue tracksprop " , tracks)
  console.log("queue setCurrentIndex " , setCurrentIndex)

  
  return (
    <div className='queue-container flex'>
      <div className='queue flex'>
        <p className='upNext'> Up Next </p>
        <div className='queue-list'>

            {tracks?.map((track , index)=>(
              <div key={index + 'key'} className='queue-item flex' onClick={()=> setCurrentIndex(index)}>
                <p className='track-name'>{track?.track?.name}</p>
                <p>{(track?.track?.duration_ms / 60000).toFixed(2)}</p>
                {/* <p>0:30</p> */}
              </div>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Queue
