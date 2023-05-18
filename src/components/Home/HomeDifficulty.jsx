import React from 'react'
import { useState } from 'react';
import { BsCheckCircleFill } from "react-icons/bs";

// Define a functional component called HomeDifficulty
const HomeDifficulty = () => {

  // Initialize difficulty as Medium using the useState hook
  const [difficulty, setDifficulty] = useState('MED');

  // Event handler for when a difficulty button is clicked
  const handleDifficultyClick = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  // Render the component
  return (
    <div>
      <div className="home-lbl-difficulty-container">
        <label className="home-lbl-difficulty">Difficulty:</label>
      </div>
      <div className="home-btn-difficulty-container">
        <button
          className={`home-btn-difficulty button-style-1 home-btn_media_adjust ${
            difficulty === "EAS" ? "dificulty-selected" : ""
          }`}
          onClick={() => handleDifficultyClick("EAS")}
        >
          <div>Easy {difficulty === "EAS" ? <BsCheckCircleFill /> : ""}</div>
        </button>
        <button
          className={`home-btn-difficulty button-style-1 home-btn_media_adjust ${
            difficulty === "MED" ? "dificulty-selected" : ""
          }`}
          onClick={() => handleDifficultyClick("MED")}
        >
          <div>Medium {difficulty === "MED" ? <BsCheckCircleFill /> : ""}</div>
        </button>
        <button
          className={`home-btn-difficulty button-style-1 home-btn_media_adjust ${
            difficulty === "HAR" ? "dificulty-selected" : ""
          }`}
          onClick={() => handleDifficultyClick("HAR")}
        >
          <div>Hard {difficulty === "HAR" ? <BsCheckCircleFill /> : ""}</div>
        </button>
      </div>
    </div>
  );
};

export default HomeDifficulty; // Export the HomeDifficulty component as the default export