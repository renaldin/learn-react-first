import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((previous) => previous + 1)
    }

    function handleDecrement(params) {
        console.log(params);
        if (count === 0) return;
        setCount(count - 1);
    }

    return (
        <div className='container'>
            <h1>Ini adalah Counter</h1>
            <div style={{ backgroundColor: "red", color: "white" }}>Ini adalah app : {count}</div>

            <button onClick={handleIncrement} className="btn btn-primary btn-sm">Increment</button>
            <button onClick={() => handleDecrement("hello")} className="button-oke">Decrement</button>

        </div>
    )
}

export default Counter;