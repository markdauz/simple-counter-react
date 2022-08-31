import { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h1>Increment/Decrement Counter</h1>
      <h2>Counter : {number}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            cursor: "pointer",
            width: 20,
            padding: 8,
            margin: 8,
            backgroundColor: "gray"
          }}
          onClick={() => setNumber((prev) => prev + 1)}
        >
          +
        </div>
        <div
          onClick={() => setNumber((prev) => prev - 1)}
          style={{
            cursor: "pointer",
            width: 20,
            padding: 8,
            margin: 8,
            backgroundColor: "gray"
          }}
        >
          -
        </div>
      </div>
    </div>
  );
}
