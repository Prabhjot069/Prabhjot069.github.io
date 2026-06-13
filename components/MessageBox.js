"use client";
import { useState } from "react";

export default function MessageBox() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessage(input);
    setInput("");
  };

  return (
    <div style={styles.card}>
      <h2>Message Box Component</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />

        <button style={styles.btn}>Send</button>
      </form>

      {/* Conditional Rendering */}
      {message ? (
        <p style={styles.success}>You said: {message}</p>
      ) : (
        <p style={styles.empty}>No message yet</p>
      )}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "10px", 
  },
  input: {
    padding: "8px",
    marginRight: "5px"
  },
  btn: {
    padding: "8px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  success: {
    color: "green",
    marginTop: "10px"
  },
  empty: {
    color: "red",
    marginTop: "10px"
  }
};