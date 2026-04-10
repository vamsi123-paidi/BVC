import React from 'react'
import { useState } from 'react'

const Couter = () => {
    const [count,setCount] = useState(0)
  return (
    <>
        <h1>count is :{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default Couter