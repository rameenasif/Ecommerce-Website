import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartDisplay from './CartDisplay.jsx'

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  }

  const handleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='bg-black relative'>
      <nav className='flex flex-row px-10 justify-between items-center'>
        <div className='flex-shrink-0'>
          <img src="/nike-logo.png" className='w-15 h-10' alt="Nike Logo" />
        </div>

        <div className='md:hidden flex items-center'>
          <button onClick={handleHamburger}>
            <img src='./public/hamburger-icon.png' className='w-8 h-8' alt="Menu" />
          </button>
        </div>

        
        <div className={`md:hidden absolute top-16 left-0 w-full bg-black text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col items-center space-y-4 py-4'>
            <li className='hover:underline underline-offset-4'>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className='hover:underline underline-offset-4'>
              <Link to="/men" onClick={() => setIsMenuOpen(false)}>Men</Link>
            </li>
            <li className='hover:underline underline-offset-4'>
              <Link to="/women" onClick={() => setIsMenuOpen(false)}>Women</Link>
            </li>
            <li className='hover:underline underline-offset-4'>
              <Link to="/kids" onClick={() => setIsMenuOpen(false)}>Kids</Link>
            </li>
            <li className='hover:underline underline-offset-4'>
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>All Products</Link>
            </li>
          </ul>
        </div>

        
        <ul className='hidden lg:flex flex-row space-x-8 justify-center items-center text-white'>
          <li className='hover:underline underline-offset-4'><Link to="/">Home</Link></li>
          <li className='hover:underline underline-offset-4'><Link to="/men">Men</Link></li>
          <li className='hover:underline underline-offset-4'><Link to="/women">Women</Link></li>
          <li className='hover:underline underline-offset-4'><Link to="/kids">Kids</Link></li>
          <li className='hover:underline underline-offset-4'><Link to="/products">All Products</Link></li>
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
  );
}

export default Navbar


