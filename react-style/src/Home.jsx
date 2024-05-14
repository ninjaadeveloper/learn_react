import React from 'react'
import Styling from './Home.module.css'

export default function Home() {

    var heading1 = {
        color: 'purple',
        backgroundColor: 'yellow',
        padding: '10px'
    }

    return (
        <>
            {/* <h1 style={{ color: 'red', 'background-color': 'black' }}>Home</h1> */}
            {/* <h1 style={heading1}>Home</h1>
            <b>This is my Home page</b>
            <h1 style={{ color: 'red', 'background-color': 'black' }}>Heading 2</h1>
            <h1 style={heading1}>Heading 3</h1> */}

            <h1 className={Styling.myheading}>Home</h1>
        </>
    )
}
