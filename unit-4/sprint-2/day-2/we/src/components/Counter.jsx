import { useState } from 'react';

export default function Counter({ initialValue })
{
        // <div style={{ color:color, }}
        // >Welcome</div>
    const [count, setCount] = useState(initialValue);
    const handleClick = (incr) => {
        setCount(count + incr);
    }
    return (
    <div className="App">
    <h2>Count: {count}</h2>
    <button onClick={() => { handleClick(1) }}>Add 1</button>
    <button onClick={() => { handleClick(-1) }}>Sub 1</button>
    </div>
    );
}