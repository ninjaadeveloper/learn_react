import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import About from './About'
import { Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
