"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.card}>
      <h2>Counter Component</h2>

      <p>Count: {count}</p>

      <button style={styles.btn} onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button style={styles.btn} onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button style={styles.btn} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "10px"
  },
  btn: {
    margin: "5px",
    padding: "8px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};