import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    // const [data, setData] = useState([])
    
    // // const {username} = useParams()

    // useEffect(() => {
    //     // fetch(`https://api.github.com/users/${username}`)
    //     fetch(`https://api.github.com/users/anujsamdariya07`)
    //     .then((response) => response.json())
    //     .then((response) => setData(response))
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-500 text-white text-3xl'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const data = await fetch('https://api.github.com/users/anujsamdariya07')
    return data.json()
} 