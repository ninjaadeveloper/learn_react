import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Profile from './Profile.jsx'
import user from '/user.webp'
import Products from './Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* components */}
    <Profile myname="Muddasir" age="19" city="Karachi" profile={user} />
    {/* <Profile age="19" city="Karachi" profile={user} /> */}
    <Home />
    <About />
    <Profile myname="Asim" age="21" city="Multan" profile={user} />
    <Profile myname="Neha" age="20" city="Lahore" profile={user} />
    <Products/>
  </React.StrictMode>,


)
