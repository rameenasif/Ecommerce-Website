import React,{useContext,useState} from 'react'
import { CartContext } from '../Contexts/CartContext.jsx';

const CartDisplay = () => {
    const { cartItems } = useContext(CartContext);
    
   

    return (
        <div className='cart-popup bg-white p-4 rounded-xl shadow-lg'>
        <p className='font-bold'>Cart</p>
        {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} className='w-10' />
                    <p>{item.name}</p>
                   <div className='flex flex-row justify-between'>
                   <p>{item.price}</p>
                  <button className='bg-transparent'>
                  <img src='./public/d.png' className='w-5'/>
                  </button>
                    </div>
                    
                </div>
            ))
        ) : (
            <p>Your cart is empty.</p>
        )}
    </div>
    );
};

export default CartDisplay;
