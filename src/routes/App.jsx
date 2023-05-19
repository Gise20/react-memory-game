import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";

import "@styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
