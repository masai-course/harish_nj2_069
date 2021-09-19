import { useState } from 'react';
import './App.css';
// import Counter from './components/counter';
import Forms from './components/form';
function App() {
 // const [mouse, setMouse] = useState("");

  return (
    <div className="App">
      {/* /* /**********Onfocus*************/
      /* <button onClick={() => {
        navigator.clipboard.writeText("Masai school");
      }}
      >CLick</button > 
      /* <div 
         onMouseMove={(e) => {
          setMouse(`${e.clientX} ${e.clientY}`)
        }}
        onMouseLeave={() => {
          setMouse("Please stay in orange area only")
        }}
         e.currentTarget.style.marginTop += 1;
          style = {{
        height: "400px",
        width: "400px",
        background: "coral",
            margin: "0 auto",
        position:"absolute",
      }}
      >
        {mouse}
      </div> */}
      {/* <Counter /> */}
      <Forms/>
    </div>
  );
}

export default App;
