import { useState } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import Login from '../components/Login/Login'
import Profiles from '../components/Profiles/Profiles'


function App() {

    
  

  return (
    
   <UserContextProvider>
    <h2>Login Page</h2>
    <Login/>
    <Profiles/>
    </UserContextProvider>
    
   
  )
}

export default App
