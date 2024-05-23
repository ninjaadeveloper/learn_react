import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WeatherFunction } from './assets/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WeatherFunction/>
    </>
  )
}

export default App
