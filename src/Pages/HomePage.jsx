import React from 'react'


const HomePage = () => {
  return (
    <div className='flex flex-col'>
    
      <div className='first-banner '>
        <div className='mr-[950px] ml-[80px] text-white'>
        <p className='font-bold'> A SPIDERMAN ORIGIN STORY</p>
        <p  className='font-bold'>Nike Air Jordan 1</p>
        <p>Across the Spider-Verse edition—where legendary design<br></br> meets superhero flair.Step into the multiverse <br></br> with these exclusive kicks that combine style <br></br> and web-slinging inspiration.</p>
        <button className='text-black font-bold mt-2  bg-white rounded-xl py-1 px-2 border border-transparent hover:bg-black hover:text-white hover:border-white'>Buy Now</button>
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
      <p className='ArchivoBlack text-center text-5xl mt-10'>Win On Air</p>
      <p className='text-center text-lg'>Meet the next generation of Nike Air. Engineered to the exact <br></br> specification of championship athletes.</p>
      <div className='flex flex-row justify-center space-x-6 mt-2'>
        <button className='border border-transparent text-white font-bold rounded-full bg-black px-4 py-1 hover:border-black hover:text-black hover:bg-white'>Experience Air</button>
        <button className='border border-transparent text-white font-bold rounded-full bg-black px-4 py-1  hover:border-black hover:text-black hover:bg-white'>Shop Air</button>

      </div>
  </div>
    
  )
}

export default HomePage
