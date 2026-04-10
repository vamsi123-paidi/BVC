import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

const Home = () => {
    const [products,setProducts] = useState([])
    const {addToCart} = useContext(CartContext)

    const fetchData = async()=>{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json()
        setProducts(data)
        console.log(data)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
   <>
    <div >
        {products.map((product)=>(
            <div style={{display:'flex',flexWrap:'wrap',gap:20,height:'400px',width:'400px',border:'2px solid black'}} key={product.id}>
            <img height='150px' width='150px' src={product.image} alt={product.title} />
            <h1>name:{product.title}</h1>
            <h3>price:{product.price}</h3>
            <p>rating:{product.rating.rate},{product.rating.count}</p>
            <button onClick={()=>addToCart(product)}>AddToCart</button>
            </div>
        ))}
    </div>
   </>
  )
}

export default Home