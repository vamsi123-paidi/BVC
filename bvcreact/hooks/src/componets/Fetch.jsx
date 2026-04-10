import React from 'react'
import { useEffect } from 'react'

const Fetch = () => {
    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await response.json()
        console.log(data)
    }
    useEffect(()=>{
        fetchData()
    })
    return (
        <>

        </>
    )
}

export default Fetch