import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>Dashboard
        <Link to='userdata'>userData</Link>
        <Link to='settings'>setting</Link>
        <Outlet/>
    </div>
    
  )
}

export default Dashboard