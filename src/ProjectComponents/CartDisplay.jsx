import React, { useContext, useState } from 'react'
import { CartContext } from '../Contexts/CartContext.jsx'
import CheckoutDisplay from './CheckoutDisplay.jsx'
import { useNavigate } from 'react-router-dom'

const CartDisplay = () => {
    const { cartItems, removeFromCart } = useContext(CartContext)
    const [count, setCount] = useState(1)
    const navigate = useNavigate() 

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const getTotalBill = () => {
        return cartItems
            .map(item => parseFloat(item.price.replace('$', ''))) //price is a string in productsData file
            .reduce((total, price) => total + price, 0)
        
    }

    const handleCheckout=()=>{
        const totalBill = getTotalBill();
    navigate('/checkout', { state: { cartItems, totalBill } })
        
    }
    

    return (
        <div className='cart-popup bg-white p-4 rounded-xl shadow-lg'>
            <p className='font-bold'>Cart</p>
            <div className='max-h-60 overflow-y-auto'>
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item mb-4">
                            <img src={item.image} alt={item.name} className='w-10' />
                            <p>{item.name}</p>
                            <div className='flex flex-row justify-between items-center'>
                                <p>{item.price}</p>
                                <button className='bg-transparent' onClick={() => removeFromCart(item)}>
                                    <img src='./public/d.png' className='w-5' alt="Remove" />
                                </button>
                            </div>
                            <div className='flex flex-row space-x-4 items-center mt-2'>
                                <button className='bg-black text-white rounded-lg px-2' onClick={increaseCount}>+</button>
                                <p>{count}</p>
                                <button className='bg-black rounded-lg px-[10px] text-white' onClick={decreaseCount}>-</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <div className='mt-4 font-bold'>
                <p>Total Bill: ${getTotalBill()}</p>
            </div>
            <div className='flex flex-col justify-center mt-4'>
            <button className='text-white bg-black px-4 rounded-lg py-2 border-transparent text-lg hover:text-yellow-500 hover:border-2 hover:border-yellow-500 'onClick={handleCheckout}>Checkout</button>
          
            </div>
        </div>
    )
}

export default CartDisplay

