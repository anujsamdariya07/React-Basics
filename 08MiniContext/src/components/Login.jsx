import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({username, password})
    }
    
    return (
        <div>
            <h2>Login</h2>
            <br />
            <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" placeholder='Username' />
            <br />
            <br />
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="text" placeholder='Password' />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br />
        </div>
  )
}

export default Login