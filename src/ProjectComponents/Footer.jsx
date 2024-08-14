import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex flex-col mt-12 pb-2'>
        <div className='flex md:flex-row flex-col'>
        <img src="./public/footer-logo.png" className='md:w-40 w-32 md:mx-40 mx-32  my-10'/>
        <div className='flex flex-col text-white font-bold mt-10 ml-32 space-y-2'>
            <p>GIFT CARDS</p>
            <p>PROMOTIONS</p>
            <p>FIND A STORE</p>
            <p>SIGN UP FOR EMAIL</p>
            <p>BECOME A MEMBER</p>
            <p>NIKE JOURNAL</p>
            <p>SEND US FEEDBACK</p>

        </div>
        <div className='flex flex-col ml-32  mt-8 space-y-2'>
            <p className='text-white font-bold'>GET HELP</p>
            <p className='text-gray-500'>Order Status</p>
            <p className='text-gray-500'>Shipping and Delivery</p>
            <p className='text-gray-500'>Returns</p>
            <p className='text-gray-500'>Payment Options</p>
            <p className='text-gray-500'>Gift Card Balance</p>
            <p className='text-gray-500'>Contact Us</p>

        </div>
        <div className='flex flex-col md:ml-40 ml-32 mt-8 space-y-2'>
            <p className='text-white font-bold'>ABOUT NIKE</p>
            <p className='text-gray-500'>News</p>
            <p className='text-gray-500'>Careers</p>
            <p className='text-gray-500'>Investors</p>
            <p className='text-gray-500'>Purpose</p>
            <p className='text-gray-500'>Sustainability</p>
            

        </div>
     

        </div>
        <div className='flex md:flex-row flex-col justify-center mx-32 mt-10'>
            <img src="./public/location-logo.png" className='w-5'/>
            <p className='text-white ml-4'>United States</p>
            <p className='text-gray-500 ml-6'>© 2024 Nike, Inc.All Rights Reserved</p>

        </div>
       
      
    </div>
  )
}

export default Footer
