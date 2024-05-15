import React from 'react'
import Styling from './About.module.css'
import Button from "react-bootstrap/Button";

export default function About() {
  return (
    <>
      {/* <h1 style={{ color: 'red', 'background-color': 'black' }}>About</h1> */}
      <h1 className={Styling.myheading}>About</h1>
      <Button variant="warning">
        Click
      </Button>
    </>
  )
}
