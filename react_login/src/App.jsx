import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  var [status, Setstatus] = useState('')

  function login() {
    var myuser = document.getElementById('username').value;
    var mypassword = document.getElementById('password').value;

    var mydata = {
      'username': 'abc',
      'password': 123
    }

    if (myuser == mydata.username && mypassword == mydata.password) {
      Setstatus(status = 'Login')
    } else {
      Setstatus(status = 'Check password and username')
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder='username' id='username' required /> &nbsp;&nbsp;
        <input type="text" placeholder='password' id='password' required /> <br />
        <input type="button" value='Submit' onClick={login} />
      </form>
      <h3>{status}</h3>
    </>
  )
}

export default App
