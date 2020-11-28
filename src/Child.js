import React, { useContext } from "react";
import context from "./Context";

function Child() {
  let value = useContext(context);
  return (
    <div>
      <p>The number in child is {value}</p>
    </div>
  );
}

export default Child;
