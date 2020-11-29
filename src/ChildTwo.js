import React, { useReducer } from "react";
import numberReducer from "./NumberReducer";

function ChildTwo() {
  let [state, dispatch] = useReducer(numberReducer, 52);
  return (
    <div>
      <p>The number in child two {state}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default ChildTwo;
