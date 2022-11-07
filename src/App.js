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
      <div className="p-5">
      <Navbar />
      <Hero />
      <Course />
      <Team />
      <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
