"use client";
import Link from "next/link";

export default function Navbar({ title }) {
  return (
    <nav style={styles.nav}>
      <h2>{title}</h2>

      <div>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/dashboard" style={styles.link}>Dashboard</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#222",
    color: "white",
    alignItems: "center"
  },
  link: {
    color: "white",
    marginLeft: "10px",
    textDecoration: "none"
  }
};