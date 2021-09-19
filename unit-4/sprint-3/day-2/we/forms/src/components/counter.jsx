import { useEffect, useState, useRef } from "react";

export default function Counter()
{
    const [counter, setCounter] = useState(0);
    const timerRef = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        startTimer();
        //console.log("timer Id", timerRef.current)
    }, []);

    function startTimer()
    {
        if (started)
        {
            return 
            }
        setStarted(true);
         timerRef.current = setInterval(() => {
            setCounter((e) => e + 1);
      }, 1000);
    }

    return (
        <>
            <h2>Counter : {counter}</h2>
            <button onClick={() => {
                setStarted(false);
                clearInterval(timerRef.current);
            }}>pause</button>
            <button onClick={() => {
                startTimer();
            }}>Start</button>
            <button ref={timerRef}
                onClick={() => {
                setCounter((e) => 0);
            }} >Reset</button>
            </>
    )
}