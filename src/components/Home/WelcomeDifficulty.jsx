import React, { useState } from 'react';
import { BsCheckCircleFill } from "react-icons/bs";

import "../../styles/Home/welcome.css";
import "../../styles/extras.css";

const WelcomeDifficulty = () => {

  const [difficulty, setDifficulty] = useState('MED');
  
  const handleDifficultyClick = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  return (
    <div>
      <div className="lbl-difficulty-container">
        <label className="lbl-difficulty">Difficulty:</label>
      </div>
      <div className="btn-difficulty-container">
        <button
          className={`btn-difficulty button-style-1 ${
            difficulty === "EAS" ? "dificulty-selected" : ""
          }`}
          onClick={() => handleDifficultyClick("EAS")}
        >
          <div>Easy {difficulty === "EAS" ? <BsCheckCircleFill /> : ""}</div>
        </button>
        <button
          className={`btn-difficulty button-style-1 ${
            difficulty === "MED" ? "dificulty-selected" : ""
          }`}
          onClick={() => handleDifficultyClick("MED")}
        >
          <div>Medium {difficulty === "MED" ? <BsCheckCircleFill /> : ""}</div>
        </button>
        <button
          className={`btn-difficulty button-style-1 ${
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

export default WelcomeDifficulty;