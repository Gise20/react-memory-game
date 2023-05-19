import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Play from "@pages/Play";

// Import CSS stylesheets
import "@styles/App.css";
import "@styles/extras.css";
import "@styles/generals.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;
