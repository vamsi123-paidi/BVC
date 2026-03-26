import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cart} = useContext(CartContext)
  return (
    <>
        {cart.map((product)=>(
           <div style={{display:'flex',flexWrap:'wrap',gap:20,height:'400px',width:'400px',border:'2px solid black'}} key={product.id}>
            <img height='150px' width='150px' src={product.image} alt={product.title} />
            <h1>name:{product.title}</h1>
            <h3>price:{product.price}</h3>
            <p>rating:{product.rating.rate},{product.rating.count}</p>
            </div>
        ))}
    </>
  )
}

export default Cart