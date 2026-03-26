import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const isAuthucated = false
    return  isAuthucated?children:<Navigate to='/' replace/>
}

export default ProtectedRoute