import React from 'react'
import { useState } from 'react'

const List = () => {
    const [list,SetList] = useState(["apple","banana"])
    const [text,setText] = useState("")
    const handleClick = ()=>{
        SetList([...list,text])
    }
  return (
    <>
        <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
            <input type="text" onInput={(e)=>setText(e.target.value)} />
            <button onClick={handleClick}>add Mango</button>
        </ul>
    </>
  )
}

export default List