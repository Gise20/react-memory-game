import React from "react";
import { HiDocumentText } from "react-icons/hi";
import imgStock from "../../assets/images/stock-images/stock-image.png";

// Creating a functional component called AboutMe
const AboutMe = () => {
  // Event handler for clicking the "See my resume" button
  const handleClickResume = () => {
    window.open("https://www.linkedin.com/in/gisellarosado/", "_blank");
  };

  return (
    <div className="about-me-container">
      <div>
        <div>
          {/* Label for the "About Me" section */}
          <label className="about-me-lbl">About Me</label>
        </div>
        <div className="about-me-description-container">
          {/* Description about the person */}
          <label>
            Hi, my name is Gisella Rosado Perrone I am a Full-Stack Software
            Engineer with 3+ years of experience in the design, development,
            integration and implementation of Technology Solutions and Project
            Management IT with use of agile methodologys.
          </label>
          <div className="about-me-resume-container">
            {/* Button to see the resume */}
            <button
              class="button-style-2 about-me-btn-resume"
              role="button"
              onClick={handleClickResume}
            >
              See my resume <HiDocumentText className="about-me-resume-icon" />
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* Image */}
        <img className="about-me-img-stock" src={imgStock} alt="Stock Image" />
      </div>
    </div>
  );
};

export default AboutMe;
