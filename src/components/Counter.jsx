import { useState } from "react";
const Counter = () => {
  const [count, setCounter] = useState(0);
  const increment = () => {
    setCounter(count + 1)
  };
  return (
    <>
      <h2>My counter</h2>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
