import { Link } from 'react-router-dom'
import React from 'react'
import Style from './Menu.module.css'

export default function Menu() {
    return (
        <>
            <Link className={`${Style.menus} ${Style.background}`} to='/'>Home</Link> &nbsp; |  &nbsp;
            <Link className={` ${Style.menus} ${Style.background}`} to='/about'>About</Link>
        </>
    )
}
 