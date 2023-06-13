import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Context from "@context/Context";
import Home from "@pages/Home";
import About from "@pages/About";
import Play from "@pages/Play";
import { initialState, reducer } from "@context/initialState"; // Update the import path

// Import CSS stylesheets
import "@styles/App.css";
import "@styles/extras.css";
import "@styles/generals.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Context.Provider value={{ ...state, dispatch, initialState }}>
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
