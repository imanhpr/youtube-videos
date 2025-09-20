import { useContext } from "react";
import { CounterCtx } from "./context";

export function Post() {
  const ctx = useContext(CounterCtx);

  return (
    <div className="main-container">
      <div className="card">
        <p>Click to increment or decrement</p>
        <div>
          <button onClick={() => ctx.setNumber((prev) => prev + 1)}>
            increment
          </button>
          <button onClick={() => ctx.setNumber((prev) => prev - 1)}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
}
