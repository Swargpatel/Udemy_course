import React, { useState } from 'react'

function Counter() {
    const [Counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(Counter + 1)
    }

    const decrement = () => {
        setCounter(Counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }
    return (

        <div style={{ textAlign: 'center' }}>
            <h1>Counter : {Counter}</h1>
            <button onClick={increment} style={{ margin: '0px  5px', padding: '5px 10px' }}>Increment</button>
            <button onClick={decrement} style={{ margin: '0px  5px', padding: '5px 10px' }}>Decrement</button>
            <button onClick={reset} style={{ margin: '0px  5px', padding: '5px 10px' }}>Reset</button>
        </div>
    )
}

export default Counter