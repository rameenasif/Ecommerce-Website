import React from 'react'


const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <div className='first-banner'>
        <div className='md:mr-[950px] md:block hidden md:ml-[80px] text-white text-[11px] md:text-[15px]'>
          <p className='font-bold text-xl'>A SPIDERMAN ORIGIN STORY</p>
          <p className='font-bold'>Nike Air Jordan 1</p>
          <p>
            Across the Spider-Verse edition—where legendary design<br />
            meets superhero flair. Step into the multiverse <br />
            with these exclusive kicks that combine style <br />
            and web-slinging inspiration.
          </p>
          <button className='text-black font-bold mt-4 bg-white rounded-full py-1 px-4 border border-transparent hover:bg-black hover:text-white hover:border-white'>
            Buy Now
          </button>
        </div>
      </div>

      <div className='md:mt-16 mt-2 flex flex-col md:flex-row relative ronaldo-bg'>
        <div className='bg-white md:absolute ml-8 md:ml-32 px-4 flex flex-col'>
          <h2 className='font-bold md:text-2xl text-center mt-12'>Cristiano Ronaldo and Nike</h2>
          <p className='text-center font-bold'>A Winning Partnership</p>
          <p className='text-center mt-4 px-1 md:pb-20 pb-4'>
            With every step Ronaldo takes, Nike's innovation<br />
            propels him forward, setting new standards in performance<br />
            and style. This partnership is more than just a collaboration;<br />
            it's a legacy of champions, inspiring millions around<br />
            the world to chase greatness. Join the movement and<br />
            elevate your game with Nike, just like Ronaldo.
          </p>
        </div>

        <img src='./public/cr7-logo.png' className='absolute hidden md:block top-[470px] left-[300px] transform -translate-x-1/2 -translate-y-1/2 w-60 h-32' />

        <div className='bg-white md:absolute ml-8 md:ml-[650px] mt-8 md:mt-[200px] text-black px-2'>
          <h2 className='text-center font-bold mt-14 text-[20px]'>Unleash Your Potential. Wear the Swoosh</h2>
          <h2 className='text-center font-bold'>Play Like Ronaldo</h2>
          <p className='text-center mt-2 md:pb-[130px] pb-2'>
            Join the Legends. Step into the Game with Nike's Elite Gear <br />
            and experience the winning edge. Whether on the field<br />
            or off, Nike's innovative designs and cutting-edge<br />
            technology ensure you perform at your best,<br />
            just like the champions who trust our brand. Elevate your<br />
            style, boost your confidence, and embrace the spirit of victory<br />
            with every step you take."
          </p>
        </div>
        
        <img src='./public/ronaldo.png' className='w-60 md:w-96 mt-8 md:ml-[1050px] self-center md:self-auto' />
      </div>

      <div className='mt-10'>
        <video
          src="./public/banner-video.mp4"
          autoplay
          loop
          muted
          controls
          preload="auto"
          className="w-full h-auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <p className='ArchivoBlack text-center text-3xl md:text-5xl mt-10'>Win On Air</p>
      <p className='text-center text-lg'>Meet the next generation of Nike Air. Engineered to the exact <br /> specification of championship athletes.</p>

      <div className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-2'>
        <button className='border border-transparent text-white font-bold rounded-full bg-black md:mx-0 mx-28 md:px-4 py-1 hover:border-black hover:text-black hover:bg-white'>
          Experience Air
        </button>
        <button className='border border-transparent text-white font-bold rounded-full bg-black  md:mx-0 mx-28 px-4 py-1 hover:border-black hover:text-black hover:bg-white'>
          Shop Air
        </button>
      </div>
    </div>
  );
};

export default HomePage;
