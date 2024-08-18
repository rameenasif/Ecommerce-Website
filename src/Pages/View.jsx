import React from 'react'
import productsData from '../productsData.json'
import {useLocation} from 'react-router-dom'


const View = () => {
    const location=useLocation()
    //uses optional chaining to check if the product is null or undefined
    const product=location.state?.product

    if(!product)
    {
        <p>Product Not Found</p>
    }
    
    
  return (
    <div className='flex flex-row text-black mx-60 space-x-20 mt-20'>
        <img src={product.image} className='mb-4 max-w-[500px] max-h-[500px] object-contain'/>
      
       <div className='flex flex-col'>
        <p className='text-xl font-bold'>{product.name}</p>
        <p className='font-semibold'>{product.gender}'s Shoes</p>
        <p className='mt-6 font-bold text-md'>{product.price}</p>
        <div className='flex flex-row justify-between mt-2'>
            <p className='text-black ml-2 font-semibold'>Select Size</p>
            <p className='text-gray-500 mr-14 font-semibold'>Size Guide</p>

        </div>
        <div className='grid grid-cols-2 '>
            <div className='col-start-1 space-y-2'>
                <button className='border px-10 py-2 rounded-lg hover:border-black'>M 6/W 7.5</button>
                <button className='border px-10 py-2 rounded-lg hover:border-black'>M 7/W 8.5</button>
                <button className='border px-10 py-2 rounded-lg hover:border-black'>M 8/W 9.5</button>
                <button className='border px-[36px] py-2 rounded-lg hover:border-black'>M 9/W 10.5</button>
                <button className='border px-8 py-2 rounded-lg hover:border-black'>M 10/W 11.5</button>
                <button className='border px-8 py-2 rounded-lg hover:border-black'>M 11/W 12.5</button>

            </div>
            <div className='col-start-2 space-y-2'>
            <button className='border px-10 py-2 rounded-lg hover:border-black'>M 6.5/W 8</button>
            <button className='border px-10 py-2 rounded-lg hover:border-black'>M 7.5/W 9</button>
            <button className='border px-[36px] py-2 rounded-lg hover:border-black'>M 8.5/W 10</button>
            <button className='border px-[36px] py-2 rounded-lg hover:border-black'>M 9.5/W 11</button>
            

            </div>

        </div>

       </div>

      
    </div>
  )
}

export default View


