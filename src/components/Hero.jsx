import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints from '../services/videoServices';

function Hero() {

    const [video,setVideo]=useState({});

    useEffect(()=>{
         axios.get(endpoints.topRated).then((response)=>{
            const videos=response.data.results;
            const randomVideo=videos[Math.floor(Math.random()*videos.length)];
            setVideo(randomVideo)
        })
    },[]);

    if(!video)
        return (
            <>
                <p>Cargando el video...</p>
            </>
        );

    const {title, backdrop_path,release_date,overview}   = video 

  return (
    <div className='w-full h-[550px] lg:h-[850px]'>
        <div className='w-full h-full'>
            <div className='absolute h-[550px] lg:h-[850px] bg-gradient-to-r from-black'>
                <img 
                className='w-full h-full object-cover object-top'
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} 
                alt={title} />
                <div className='absolute w-full top-[70%] p-4 md:p-8'>
                    <p className=' bg-black text-gray-100 w-[160px] uppercase nsans-bold'>{title}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero