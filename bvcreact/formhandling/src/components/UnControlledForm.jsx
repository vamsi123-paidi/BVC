import React, { useRef } from 'react'

const UnControlledForm = () => {
    const inputRef = useRef()
    const handleSubmit = ()=>{
        alert(`hello ${inputRef.current.value}`)
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder='enter name..' />
            <button type='submit'>submit</button>
        </form>
    </>
  )
}

export default UnControlledForm