import React from 'react'
import { useState, useContext } from 'react';
import { BsCheckCircleFill } from "react-icons/bs";
import Context from '@context/Context';

// Define a functional component called HomeDifficulty
const HomeDifficulty = ({ setSelectedDifficulty }) => {

  const data = useContext(Context);
  // Initialize difficulty as Medium using the useState hook
  const [difficulty, setDifficulty] = useState(data.difficulty);

  // Event handler for when a difficulty button is clicked
  const handleDifficultyClick = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setSelectedDifficulty(newDifficulty);
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
            difficulty === "EASY" ? "dificulty-selected" : ""
          }`}
          onClick={() => handleDifficultyClick("EASY")}
        >
          <div>Easy {difficulty === "EASY" ? <BsCheckCircleFill /> : ""}</div>
        </button>
        <button
          className={`home-btn-difficulty button-style-1 home-btn_media_adjust ${
            difficulty === "MEDIUM" ? "dificulty-selected" : ""
          }`}
          onClick={() => handleDifficultyClick("MEDIUM")}
        >
          <div>Medium {difficulty === "MEDIUM" ? <BsCheckCircleFill /> : ""}</div>
        </button>
        <button
          className={`home-btn-difficulty button-style-1 home-btn_media_adjust ${
            difficulty === "HARD" ? "dificulty-selected" : ""
          }`}
          onClick={() => handleDifficultyClick("HARD")}
        >
          <div>Hard {difficulty === "HARD" ? <BsCheckCircleFill /> : ""}</div>
        </button>
      </div>
    </div>
  );
};

export default React.memo(HomeDifficulty); // Export the HomeDifficulty component as the default export