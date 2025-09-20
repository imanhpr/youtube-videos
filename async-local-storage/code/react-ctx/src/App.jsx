import { useState } from "react";
import CounterCard from "./Counter-Card";
import PostList from "./PostList";

function PropDrill2({ number1 }) {
  return <p style={{ textAlign: "center" }}>prop drill : {number1}</p>;
}

function PropDrill({ number1 }) {
  return <PropDrill2 number1={number1} />;
}

function App() {
  const [number1] = useState("hello drill prop");
  return (
    <div>
      <PostList />
      <CounterCard />
      <PropDrill number1={number1} />
    </div>
  );
}

export default App;
