 import { useState } from "react";
import './App.css';
import Counter from "./components/counter";
 import { Todo } from "./components/Todo";
import Counter1  from './components/counter1';
function App() {
   const [show, setShow] = useState(true);
  return (
    <div className="App"> 
      {/* {show ? (
        <>
          <Counter />
          <button onClick={() => {
            setShow(false);
          }}>
            Hide Counter
          </button>
        </>
      )
        :
        (
          <>
          <button onClick={() => {
        setShow(true)
            }}>
              Show Counter
            </button>
          </>
        )
      }    
       <Counter1/> */}
     <Todo />
    </div>
  );
}

export default App;
