import React from 'react'

export default function Button() {
    return (
        <button>Click me</button>
    )
}


function Link() {
    return (
        <a href='https://www.google.com' target="_blank">Click to Go</a>
    )
}

function Span() {
    return (
        <span><i>Hello, this is a span</i></span>
    )

}

function AlertButton({name, message}) {

    return (
        <>
            <button onClick={()=> alert(message) } >{name}</button></>
    )

}

function Events() {
    const numbers = 2 + 2

    function ClickButton() {
        alert("This is a alert")
    }


    return (
        <>
            <h2>This Result is {numbers}</h2>
            {/*<button onClick={ClickButton}>Click Me</button>
            <button onClick={() => alert('This is a auto function')} >Auto Function</button> */}
            <AlertButton name="Play" message="This is a Play Button" />
            <AlertButton name="Click" message="This is a Click Button" />
        </>
    )
}

export { Link, Span, Events, AlertButton }