import React from "react";
import "./App.css";
import context from "./Context";
import Parent from "./Parent";

function App() {
  let valueForContext = 50;
  return (
    /*//////////////////////////////////////////////////////////////////////
    // If you don't wrap the context provider around the components then the 
    // context consumer will use the default value which was declared in the 
    // context file. But if you don't wrap a provider then the value of the
    // context will not update for the complete tree. It will just update 
    // for that particular component.
    */ /////////////////////////////////////////////////////////////////////

    <context.Provider value={valueForContext}>
      <div className="App">
        <h1>Hello World!</h1>
        <Parent />
      </div>
    </context.Provider>
  );
}

export default App;
