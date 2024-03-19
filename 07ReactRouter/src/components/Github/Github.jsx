import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

let username2

function Github() {
    const data = useLoaderData()
    
    // const {username} = useParams()
    // username2 = username
    // console.log(username2)
    // const [data, setData] = useState([])
    
    // // const {username} = useParams()
    
    // useEffect(() => {
        //     // fetch(`https://api.github.com/users/${username}`)
        //     fetch(`https://api.github.com/users/anujsamdariya07`)
        //     .then((response) => response.json())
        //     .then((response) => setData(response))
        // }, [])
        
        return (
            <div className='flex flex-row min-h-screen justify-center items-center -my-40'>
                <div className='text-center m-4 bg-gray-500 text-white text-3xl flex justify-center flex-col  items-center gap-3 p-3 w-6/6'>Github Followers: {data.followers}
                    <img className='' src={data.avatar_url} alt="Git Picture" width={300} />
                </div>
            </div>
    )
}
// console.log(username2)

export default Github

export const githubInfoLoader = async () => {
    // console.log(username2)
    const data = await fetch(`https://api.github.com/users/anujsamdariya07`)
    return data.json()
}