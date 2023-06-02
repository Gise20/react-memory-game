import React from "react";
import { Routes, Route } from "react-router-dom";
import Context from "@context/Context";
import Home from "@pages/Home";
import About from "@pages/About";
import Play from "@pages/Play";

// Import CSS stylesheets
import "@styles/App.css";
import "@styles/extras.css";
import "@styles/generals.css";

function App() {
  const initialState = {
    playerName: undefined,
    difficulty: 'MEDIUM',
    regions: ['Kanto'],
    score: 0,
    numCards: 0,
    timeBonus: 0
  };

  return (
    <div className="App">
      <Context.Provider value={initialState}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
