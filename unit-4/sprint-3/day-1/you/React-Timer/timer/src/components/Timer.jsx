import React, {useState} from 'react'
import {useEffect} from "react"

function Timer() {
    const[count, setCount] = useState(0);

    useEffect(() => {
       const id = setInterval(() =>{
            setCount((preVal)=>{
                if(preVal === 9){
                    clearInterval(id);
                }
                console.log(preVal);
                return preVal+1
            })}, 1000)

            return () =>{
                clearInterval(id)
            }
        
    },[])
    return (
        <div>
            Count is:{count}
        </div>
    )
}

export default Timer