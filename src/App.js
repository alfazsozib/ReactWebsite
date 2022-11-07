import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import Course from "./components/Course";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Course />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
