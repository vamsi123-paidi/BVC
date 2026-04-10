import React, { useEffect, useMemo, useState } from 'react'

const UseMomoEx = () => {
    const [count,setCount] = useState(0)
    const [dec,setdec] = useState(0)

    // useEffect(()=>{
    //     console.log(count)
    //     console.log(dec)
    // })

    const expensiveValue = useMemo(()=>{
         console.log("caluclating...")
        return count*2
    },[count])
  return (
    <>
        <h1>count:{count}</h1>
        <h2>dec:{dec}</h2>
        <h3>expensive Vlaue:{expensiveValue}</h3>
        <button onClick={()=>setCount(count+1)}>incremnet</button>
        <button onClick={()=>setdec(dec-1)}>dec</button>
    </>

    
  )
}

export default UseMomoEx