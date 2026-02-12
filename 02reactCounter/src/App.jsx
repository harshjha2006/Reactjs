import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(15);

  const addValue = () => {
  ;  
  if (counter <20){

    setcounter(counter+1)
  }
  }

  const removeValue = () => {
 if (counter > 0){

    
    setcounter(--counter)
  }
  }

  return (
    <>
    <h1> Chai Aur ReactJS</h1>
    <h2>Counter Value is: {counter}</h2>

  <button onClick={addValue}>Add Value</button>
  <br />
  <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
