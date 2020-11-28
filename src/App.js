import React, { useState } from "react";
import "./App.css";
import Parent from "./Parent";

function App() {
  let [number, setNumber] = useState(12);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Parent num={number} />
      <button
        onClick={() => {
          setNumber(++number);
        }}
      >
        Update Number
      </button>
    </div>
  );
}

export default App;
