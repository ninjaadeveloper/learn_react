import React from 'react'
import { useState } from 'react'

export default function Color() {

    const [color, setColor] = useState('black');

    return (
        <>
            <div style={{ height: '200vh', 'backgroundColor': `"${color}"` }}>
                <button onClick={() => { setColor("white") }}>Day</button>
            </div>
        </>
    )
}
