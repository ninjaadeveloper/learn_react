import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import About from './About'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to='/'>Home</Link> &nbsp; |  &nbsp;
      <Link to='/about'>About</Link>

      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
