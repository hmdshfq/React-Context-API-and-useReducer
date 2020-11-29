import Child from "./Child";
import ChildTwo from "./ChildTwo";

function Parent() {
  return (
    <div>
      <h2>Parent</h2>
      <Child />
      <ChildTwo />
    </div>
  );
}

export default Parent;
