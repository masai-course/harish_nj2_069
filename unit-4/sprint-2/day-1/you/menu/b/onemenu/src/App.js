import React from "react";
import { Onemenu } from "./components/onemenu";
import "./components/menu.css";

function App() {
  const data = [
    { bname: "JOIN US", bcolor: "join" },
    { bname: "SETTINGS", bcolor: "settings" },
    { bname: "LOGIN", bcolor: "login" },
    { bname: "CONTACT US", bcolor: "contact" },
    { bname: "SEARCH", bcolor: "search" },
    { bname: "HELP", bcolor: "help" },
    { bname: "HOME", bcolor: "home" },
    { bname: "DOWNLOAD", bcolor: "download" },
  ]
  return (
    <div className="menu">
     
      {data.map(el => <Onemenu bname={el.bname} bcolor={el.bcolor} />
      )}
    </div>
  ) 
}

export default App;
