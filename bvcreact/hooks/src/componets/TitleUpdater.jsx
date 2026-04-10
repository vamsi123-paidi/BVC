import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const TitleUpdater = () => {
    const [title,setTitle] = useState("")
    const handleChange = (e)=>{
        setTitle(e.target.value)
    }
    useEffect(()=>{
        document.title = `${title || "dummy"} `
    })
  return (
    <>
        <input type="text" onChange={handleChange} />
    </>
  )
}

export default TitleUpdater