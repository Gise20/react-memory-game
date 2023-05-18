import React from 'react'
import { useNavigate } from "react-router-dom";

// Importing the components used in the AboutData component
import AboutMe from "./AboutMe";
import AboutStack from "./AboutStack";
import AboutProject from "./AboutProject";
import AboutEducation from "./AboutEducation";
import AboutExperience from "./AboutExperience";

// Creating a functional component called AboutData
const AboutData = () => {
  const navigate = useNavigate();

  // Function to handle the click event and navigate back to the "/home" route
  const handleClickBakcToGame = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className="about-data-container">
        <div className="about-data">
          {/* Rendering various components related to about section */}
          <AboutMe />
          <AboutStack />
          <AboutProject />
          <AboutEducation />
          <AboutExperience />
          
          <div className="about-data-back-game">
            {/* Button to go back to the game */}
            <button
              className="button-style-3 about-data-back-game-btn"
              role="button"
              onClick={handleClickBakcToGame}
            >
              Back to the game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutData;
