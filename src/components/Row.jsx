import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Video from './Video';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
//            <MdChevronLeft/>   <MdChevronRight/>
const Row = ({title,fetchURL, rowID}) => {

    const [videos,setVideos]=useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
          setVideos(response.data.results);
        });
      }, [fetchURL]);

   const slideLeft=()=>{
        var slider =document.getElementById('slider' + rowID);
        slider.scrollLeft=slider.scrollLeft-500;
    };   
   const slideRight=()=>{
        var slider =document.getElementById('slider' + rowID);
        slider.scrollLeft=slider.scrollLeft+500;
    };   


  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft 
                onClick={slideLeft}
                className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-black' size={40}/> 
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {
                    videos.map((item,id)=>(
                        <Video item={item} />
                    ))
                }
            </div>
            <MdChevronRight 
                onClick={slideRight}
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-black' size={40}/>   
        </div>
        <div>
            
        </div>
    </>
  )
}

export default Row