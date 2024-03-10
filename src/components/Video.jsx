import React from 'react'

const Video = ({item}) => {
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img 
        className='w-full h-auto block' 
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
        <div>
            <p>{item?.title}</p>
        </div>    
    </div>
  )
}

export default Video