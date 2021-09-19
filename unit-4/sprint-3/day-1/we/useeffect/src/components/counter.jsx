import { useEffect, useState } from "react";

function Counter()
{
     const [count, setCount] = useState(10);
    useEffect(() => {
       const id = setInterval(() => {
           // console.log("Calling 1s ", count );
            setCount((prev) => {
                if (prev === 1 )
                {
                    clearInterval(id);
                    }
                console.log(prev);
                return prev - 1;
            });
            console.log("Set Interval ID", id);
       }, 1000);  
        return () => {
            console.log("Unmounting phase");
            clearInterval(id);
        };
    }, []);
   
    return <>Counter is: {count}</>
}

export default Counter;