import React, { useContext, useState } from 'react'
import { CartContext } from '../Contexts/CartContext.jsx'

const CartDisplay = () => {
    const { cartItems, removeFromCart } = useContext(CartContext)
    const [count, setCount] = useState(1)

    const increaseCount = () => {
        setCount(count+1)
    }

    const decreaseCount = () => {
        setCount(count-1)
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
        </div>
    )
}

export default CartDisplay

