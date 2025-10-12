import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Schools from "./pages/Schools";
import Projects from "./pages/Projects";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sponsor from "./pages/Sponsor";

export default function App() {
  const location = useLocation(); 

  
  const noGlobalFooter = ["/about"];

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      
      {!noGlobalFooter.includes(location.pathname) && <Footer />}
    </div>
  );
}