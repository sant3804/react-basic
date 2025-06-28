import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let val= 'arjun kumar yadav'
  
  
  let [str, setCount] = useState('santosh kumar')
  let s='santosh kumar';
  
  const value=()=>{
    setCount(val + " is playing with santosh");
  }
  const same=()=>{
    setCount(s);
  }

  return (
    <>
      <div>
      <h1>{str}</h1>
      <h1>{str}</h1>
      <h1>{str}</h1>
      <h1>{str}</h1>
      <button onClick={value}>yes</button>
      <button onClick={same}>NO</button>
      
        </div>
    </>
  )
}

export default App
