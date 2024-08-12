import React from 'react'


const HomePage = () => {
  return (
    <div className='flex flex-col'>
    
      <div className='first-banner '>
        <div className='mr-[950px] ml-[80px] text-white'>
        <p className='font-bold'> A SPIDERMAN ORIGIN STORY</p>
        <p  className='font-bold'>Nike Air Jordan 1</p>
        <p>Across the Spider-Verse edition—where legendary design<br></br> meets superhero flair.Step into the multiverse <br></br> with these exclusive kicks that combine style <br></br> and web-slinging inspiration.</p>
        <button className='text-black font-bold mt-4  bg-white rounded-full py-1 px-4 border border-transparent hover:bg-black hover:text-white hover:border-white'>Buy Now</button>
        </div>
        
      </div>
      <div className='mt-16 flex flex-row relative ronaldo-bg'>
      <div className='bg-white absolute ml-32 px-4 flex flex-col'>
          <h2 className='font-bold text-2xl text-center mt-12'>Cristiano Ronaldo and Nike</h2>
          <p className='text-center font-bold '>A Winning Partnership</p>
          <p className='text-center mt-4 px-1 pb-20'>With every step Ronaldo takes, Nike's innovation<br></br> propels him forward, setting new standards in performance<br></br> and style.This partnership is more than just a collaboration;<br></br> it's a legacy of champions, inspiring millions around<br></br> the world to chase greatness. Join the movement and<br></br> elevate your game with Nike, just like Ronaldo.</p>

        </div>
  
        <img src='./public/cr7-logo.png' className='absolute top-[470px] left-[300px] transform -translate-x-1/2 -translate-y-1/2 w-60 h-32' />
      
        <div className='bg-white absolute ml-[650px] mt-[200px] text-black px-2'>
          <h2 className='text-center font-bold mt-14 text-[20px]'>Unleash Your Potential. Wear the Swoosh </h2>
          <h2 className='text-center font-bold'>Play Like Ronaldo</h2>
          <p className='text-center mt-2 pb-[120px]'>Join the Legends. Step into the Game with Nikes Elite Gear <br></br> and experience the winning edge. Whether on the field<br></br>  or off, Nikes innovative designs and cutting-edge<br></br>  technology ensure you perform at your best,<br></br>  just like the champions who trust our brand. Elevate your<br></br>  style, boost your confidence, and embrace the spirit of victory<br></br>  with every step you take."</p>

        </div>
        <img src='./public/ronaldo.png' className='w-96 ml-[1050px]'/>
   

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
