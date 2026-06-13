"use client";
import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div style={styles.card}>
      <h2>Todo Component</h2>

      <form onSubmit={addTodo}>
        <input
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />

        <button style={styles.addBtn}>Add</button>
      </form>

      {/* Conditional Rendering */}
      {todos.length === 0 ? (
        <p style={{ color: "red" }}>No tasks yet</p>
      ) : (
        <ul>
          {todos.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
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
  input: {
    padding: "8px",
    marginRight: "5px"
  },
  addBtn: {
    padding: "8px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};