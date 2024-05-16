import React from 'react'
import { Link } from 'react-router-dom'

export default function MyLinks() {
    return (
        <>
            <Link to="profile">Profile</Link>&nbsp;|&nbsp; 
            <Link to="about">About</Link>&nbsp;|&nbsp; 
            <Link to="counter">Counter</Link> &nbsp;|&nbsp; 
            <Link to="color">Color</Link> 
        </>
    )
}
