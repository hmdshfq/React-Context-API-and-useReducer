import React, { useReducer } from "react";
import numberReducer from "./NumberReducer";

function ChildTwo() {
  let [state, dispatch] = useReducer(numberReducer, 52);
  return (
    <div>
      <p>The number in child two {state}</p>
    </div>
  );
}

export default ChildTwo;
