import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div><br />Please Login <br /></div>

    return (
        <>
            <br />
            <div>Welcome {user.username}!!</div>
            <br />
        </>
    )
}

export default Profile