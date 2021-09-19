import { useEffect, useState } from "react";

export default function Counter1()
{
     const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(0);

  console.log("Before effect");

  useEffect(() => {
    console.log("Watching for changes in counter");
  }, [counter]);

   useEffect(() => {
    console.log("Watching for changes in age");
   }, [age]);

  //Only once forever
   useEffect(() => {
    console.log("Empty Array");
  }, []);

    console.log("After effect");
    return (
    <div>
      <h1>Count is : {counter} </h1>
      <h1>Age is { age }</h1>
      <button onClick={() => { setCounter(counter + 1) }}>Add1</button>
      <button onClick={() => { setAge(Math.random()) }}>Add</button>
    </div>
  );
}
