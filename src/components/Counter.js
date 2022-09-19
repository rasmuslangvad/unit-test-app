import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={() => decrement()}>Decrease</button>
      <span style={{ margin: "0 10px" }} data-testid="count-value">
        {count}
      </span>
      <button onClick={() => increment()}>Increase</button>
      {count > 2 && (
        <div className="counter__warning">Number is too damn high!</div>
      )}
    </div>
  );
};

export default Counter;
