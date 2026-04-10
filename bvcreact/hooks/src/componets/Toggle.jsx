import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState(true)
  return (
    <>
        <button onClick={()=>setToggle(!toggle)}>{toggle?"show":"hide"}</button>
        {toggle?"":"this is content visible"}
    </>
  )
}

export default Toggle