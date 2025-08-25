import { useState } from 'react'
import './App.css'
import Chukwuemeka from './Chukwuemeka/Chukwuemeka'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chukwuemeka />  
    </>
  )
}

export default App
