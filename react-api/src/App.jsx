import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Learn API</h2>
      <User />
    </>
  )
}

export default App
