import React from "react";
import { Joinus } from "./components/joinus"
import { Settings } from "./components/settings"
import { Login } from "./components/login"
import { Contact } from "./components/contact"
import { Search } from "./components/search"
import { Help } from "./components/help"
import { Home } from "./components/home"
import { Download } from "./components/download"
import "./components/menu.css";

function App() {
  return (
    <div className="menu">
      <Joinus />
      <Settings />
      <Login />
      <Contact />
      <Search />
      <Help />
      <Home />
      <Download/>
    </div>
  );
}

export default App;
