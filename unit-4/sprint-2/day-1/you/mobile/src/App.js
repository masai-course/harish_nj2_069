import React from "react";
import { Operating } from "./components/operating"
import { Manufacturers } from "./components/manufacturers"
import "./components/mobile.css"

function App() {
  return (
    <div className="mobile">
      <Operating />
      <Manufacturers/>
    </div>
  );
}

export default App;
