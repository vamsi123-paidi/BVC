import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const DependenciesEx = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(()=>{
        console.log(count)
        console.log(count1)
        console.log(count2)
    },[count1,count2])
    return (
        <>
            <h1>{count}{count1}{count2}</h1>
            <button onClick={()=>setCount(count+1)}>++</button>
            <button onClick={()=>setCount1(count1+1)}>++</button>
            <button onClick={()=>setCount2(count2+1)}>++</button>
        </>
    )
}

export default DependenciesEx