"use client";
import Navbar from "@/components/Navbar";
import Todo from "@/components/Todo";

export default function Dashboard() {
  return (
    <div>
      <Navbar title="Dashboard" />

      <div style={styles.container}>
        <h1>User Dashboard</h1>

        <Todo />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px"
  }
};