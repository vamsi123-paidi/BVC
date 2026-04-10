import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const [user, setUser] = useState(null)
    const { userID } = useParams()

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        const data = await response.json()
        setUser(data)
        console.log(data)
    }


    useEffect(() => {
        fetchData()
    }, [userID])
    return (
        <>
            {(!user) ? <p>loading....</p> :
            <div>
            <p>{user?.name}</p> 
            <p>{user?.email}</p>
            </div>}
        </>
    )
}
// (cond)?true:false
export default UserProfile