import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("state: ", state);

  function handleIncrement() {
    dispatch({ type: "INCREMENT" });
  }

  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div>
      <div>{state}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
