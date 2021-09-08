import { useState } from 'react';

export default function Counter({ initialValue })
{
    const [count, setCount] = useState(initialValue);
    const handleClick = (value) => {
        setCount(count + value);
    }
    const handleClick2 = (value) => {
        setCount(count * value);
    }

    return (
        <div className="App">
            <h2>Counter: {count} </h2>
            <button onClick={() => { handleClick(1) }}>Increment</button>
            <button onClick={() => { handleClick(-1) }}>Decrement</button>
            <button onClick={() => {handleClick2(2)}}>Double</button>
        </div>
    )
}