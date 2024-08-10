import React from 'react'
import Navbar from '../ProjectComponents/Navbar.jsx'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
    
      <div className='first-banner '>
        <div className='mr-[950px] ml-[80px] text-white'>
        <p className='font-bold'> A SPIDERMAN ORIGIN STORY</p>
        <p  className='font-bold'>Nike Air Jordan 1</p>
        <p>Across the Spider-Verse edition—where legendary design<br></br> meets superhero flair.Step into the multiverse <br></br> with these exclusive kicks that combine style <br></br> and web-slinging inspiration.</p>
        <button className='text-black font-bold mt-2  bg-white rounded-xl py-1 px-2'>Buy Now</button>
        </div>
        
      </div>
      <div className='mt-10'>
      <video
  src="./public/banner-video.mp4"
  autoplay
  loop
  muted
  controls
  preload="auto"

  class="w-full h-auto"
>
  Your browser does not support the video tag.
</video>

      </div>

      </div>
    
  )
}

export default HomePage
