import React from 'react'
import { useState } from 'react'

const Text = () => {
    const [text,setText] = useState("")
    const [newtext,setNewText] = useState("")
  return (
    <>
        <input type="text" onInput={(e)=>setText(e.target.value)}/>
        <button onClick={()=>setNewText(text)}>show text</button>
        <h1> you are typing this now {newtext}</h1>
    </>
  )
}

export default Text