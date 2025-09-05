import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={increment} style={{ margin: "5px" }}>Increment</button>
        <button onClick={decrement} style={{ margin: "5px" }}>Decrement</button>
        <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
      </div>

      {count >= 10 && <p style={{ color: "green" }}>Goal Reached!</p>}
    </div>
  );
}

export default App;
