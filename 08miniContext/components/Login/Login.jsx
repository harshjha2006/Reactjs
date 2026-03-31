import React, { useContext,useState } from 'react'
import UserContext from '../../context/UserContext'

function Login  () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [genders, setGenders] = useState('')
    const [age, setAge] = useState('')


    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password,age,genders})
        // setGenders({genders}) 
    }
  return (
    <div>

        <h2>Login/Sign Up</h2>

        <input type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='Username'/>
        {"  "}
        <input type="text"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password'/>
        {"  "}
        <input type="text" 
        value={age}
        onChange={(e)=> setAge(e.target.value)}
        placeholder='Age'/>
        {"  "}
        <input type="text" 
        value={genders}
        onChange={(e)=> setGenders(e.target.value)}
        placeholder='Gender'/>
        {"  "}
        <button 
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login
