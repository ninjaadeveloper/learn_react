import React, { useState } from 'react'
export default function Counter() {

    var [Count, setCount] = useState(5)
    console.log(Count);

    function Increment() {
        setCount(Count + 1)
    }

    function Decrement() {
        if (Count != 0) {
            setCount(Count - 1)
        }
    }

    return (
        <>
            <h2>Counter</h2>

            <button onClick={Increment}>Increment</button>
            <h3>Count is: {Count}</h3>
            <button onClick={Decrement}>Decrement</button>


        </>
    )
}
