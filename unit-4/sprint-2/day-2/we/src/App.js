
import './App.css';
import Counter from './components/Counter';
import { Todos } from './components/Todos';
// import Counter from "./components/Counter"

function App() {
   //  let counter = 1;
  // const [count, setCount] = useState(1);
  //....state, setstate
  // const [age, setAge] = useState(10);
  // console.log("value of count is", count);

  // const handleClick = (incr) => {
    // console.log("Button Clicked!", counter);
    // counter = counter + 1;
  //   setCount(count + incr);
  // }

  // const handleClick1 = () => {
  //   setCount(count * 2);
  // }
  return (
    <div className="App">
      <Counter initialValue={0} />
      <Todos/>
      {/* <Counter color={"red"} /> */}
      {/* <h2>Count: {count}</h2> */}
      {/* <button onClick={handleClick}>Add 1</button> */}
      {/* <button onClick={() => { handleClick(1) }}>Add 1</button>
      <button onClick={() => { handleClick(-1) }}>Add 1</button> */}
      {/* <button onClick={handleClick1}>Multiply 1</button> */}
    </div>
  );
}

export default App;
