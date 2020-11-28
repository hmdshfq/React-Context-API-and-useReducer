import Child from "./Child";

function Parent(props) {
  return (
    <div>
      <h2>Parent</h2>
      <Child num={props.num} />
    </div>
  );
}

export default Parent;
