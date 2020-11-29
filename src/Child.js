import React, { useContext } from "react";
import context from "./Context";

function Child() {
  let value = useContext(context);
  return (
    <div>
      <p>The number in child is {value[0]}</p>
      <button onClick={()=>{value[1](++value[0])}}>Update Value</button>
    </div>
  );
}

export default Child;
