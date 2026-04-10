import React, { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const addToCart = (product)=>{
        setCart([...cart,product])
        alert("item added to cart")
    }
  return (
    <CartContext.Provider value={{cart,addToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider