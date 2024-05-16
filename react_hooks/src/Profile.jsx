import React from 'react'

export default function Profile() {

    var stdData = {
        name: 'Asim',
        age: 21,
        eat: 'biryai',
        work: 'coding'
    }

    var changeText = () => {
        alert('Hello')
        stdData.name = "Zaik",
            stdData.age = 19,
            stdData.eat = 'Karahi',
            stdData.work = 'playing'
    }
    // console.log(stdData)

    return (
        <>
            <h3>My Name is {stdData.name}</h3>
            <h4>My age is {stdData.age}</h4>
            <h4>I likes to eat {stdData.eat}</h4>
            <h4>I love to do {stdData.work}</h4>
            <button onClick={changeText}>Change Text</button>
        </>
    )
}
