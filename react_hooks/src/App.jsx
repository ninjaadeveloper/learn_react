
import './App.css'
import Profile from './Profile'
import About from "./About";
import { Route, Routes } from 'react-router-dom';
import MyLinks from './MyLinks';
import Counter from './Counter';
import Color from './Color';

function App() {
  return (
    <>
      <MyLinks />
      <Routes>
        <Route path='profile' element={<Profile />} />
        <Route path='about' element={<About />} />
        <Route path='counter' element={<Counter />} />
        <Route path='color' element={<Color />} />
      </Routes>
    </>
  )
}

export default App
