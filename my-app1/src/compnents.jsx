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

export { Link,Span }