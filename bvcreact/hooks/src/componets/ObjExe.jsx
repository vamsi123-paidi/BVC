import React from 'react'
import { useState } from 'react'

const ObjExe = () => {
    const [obj, setObj] = useState({ name: "adam", age: 25 })
    const handleClick = ()=>{
        setObj({...obj,city:"amalapuram"})
    }
    return (
        <>
            {obj.name}
            {obj.age}
            {obj.city?obj.city:""}
        <button onClick={handleClick}>add city propertie</button>
        </>
    )
}

export default ObjExe