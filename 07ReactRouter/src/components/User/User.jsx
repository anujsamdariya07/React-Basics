import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
    
    return (
        <div className='text-center text-white bg-gray-600 text-3xl p-4'>User: {userId}</div>
    )
}

export default User
