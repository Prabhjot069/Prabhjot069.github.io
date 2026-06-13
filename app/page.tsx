"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Counter from "@/components/Counter";
import MessageBox from "@/components/MessageBox";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Navbar title="My Front-End App" />

      <div style={styles.container}>
        <h1>Welcome to Home Page</h1>

        <button
          style={styles.loginBtn}
          onClick={() => setLoggedIn(!loggedIn)}
        >
          {loggedIn ? "Logout" : "Login"}
        </button>

        {loggedIn ? (
          <p style={{ color: "green" }}>You are logged in!</p>
        ) : (
          <p style={{ color: "red" }}>Please log in</p>
        )}

        <Counter />
        <MessageBox />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px"
  },
  loginBtn: {
    padding: "10px",
    marginBottom: "10px"
  }
};