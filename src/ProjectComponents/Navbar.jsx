import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartDisplay from './CartDisplay.jsx'

const Navbar = () => {
  const [isCartVisible, SetisCartVisible] = useState(false)

  const handleCartVisibility=()=>{

    if(isCartVisible===false)
    {
     SetisCartVisible(true)
    }
    else if(isCartVisible===true)
    {
     SetisCartVisible(false)
    }
 
 
   }
  return (
    <div className='bg-black relative'>
      <nav className='flex flex-row space-x-8 px-10 justify-between items-center'>
        <div className='flex-shrink-0'>
          <img src="/nike-logo.png" className='w-15 h-10' alt="Nike Logo" />
        </div>
        <ul className='flex flex-row space-x-8 justify-center items-center text-white'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li><Link to="/products">All Products</Link></li>
        </ul>
        <div className='flex-shrink-0 relative'>
          <button onClick={handleCartVisibility}>
            <img src='./public/cart.jpg' className='w-10' alt="Cart" />
          </button>
          {isCartVisible && (
            <CartDisplay />
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar

