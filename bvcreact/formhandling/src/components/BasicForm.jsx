import React, { useState } from 'react'

const BasicForm = () => {
    const [name,setName] = useState("")
   const  handleSubmit  = ()=>{
        alert(`hello this is ${name}`)
   }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter username...' onChange={(e)=>setName(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default BasicForm