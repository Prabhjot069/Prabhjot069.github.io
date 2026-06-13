"use client";
import Navbar from "@/components/Navbar";

function InfoBox({ text }) {
  return <p style={styles.box}>{text}</p>;
}

export default function About() {
  return (
    <div>
      <Navbar title="About Page" />

      <div style={styles.container}>
        <h1>About This App</h1>

        <InfoBox text="This app demonstrates React components, props, state, and events." />
        <InfoBox text="Built using Next.js with inline CSS only." />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px"
  },
  box: {
    backgroundColor: "white",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px"
  }
};