import React from 'react'
import { useRef } from 'react'

const UseRefEx = () => {
    const ref = useRef()
    const handleClick = ()=>{
        ref.current.focus()
    }

  return (
    <div>
        <input type="text"  ref={ref}/>
        <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default UseRefEx