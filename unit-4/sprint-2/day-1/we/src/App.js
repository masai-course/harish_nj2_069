// import logo from './logo.svg';
// import './App.css';
// import Button from "./Button"; 
import React from "react";
// import {ListItem} from "./components/Listitem"
import {Category} from "./components/categories"

function App() { 
  const data = [
    { url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",title:"Top Offers" },
    { url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100", title: "Groceries" },
    { url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100", title: "Groceries" }
  ]
  return (
    <div>
      { /* <ListItem age={10} name="masai"/>
      <ListItem age={11} name="harish"/> */ }
      {data.map(el => <Category imageUrl={el.url} title={el.title} />
      )}
    </div>
  );
      // {/* <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <h1>Hello</h1>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React <Button />, Welcome everyone
          
      //   </a>
      // </header> */}
      
}

export default App;
