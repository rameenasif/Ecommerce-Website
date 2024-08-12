import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        console.log("added")
        setCartItems(prevItems => [...prevItems, product])
    }
    

    const removeFromCart=(product)=>{
        const filteredCartItems=(cartItems.filter(cartItem => cartItem !== product))
        setCartItems(filteredCartItems)
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart,removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}
