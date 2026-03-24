import React from 'react'
import { useEffect } from 'react'

const BasicUseEffect = () => {
    const message = "hello this is inside useEffect"

    useEffect(()=>{
        console.log(message)
    })
  return (
    <>
        
    </>
  )
}

export default BasicUseEffect