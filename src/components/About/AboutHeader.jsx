import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

// Import CSS stylesheets
import "@styles/about.css";

// Creating a functional component called AboutHeader
const AboutHeader = () => {
  // Event handler for clicking the "GitHub" label
  const handleClickGitHub = () => {
    window.open("https://github.com/Gise20", "_blank");
  };

  // Event handler for clicking the "LinkedIn" label
  const handleClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/gisellarosado/", "_blank");
  };

  return (
    <div className="about-header">
      <div>
        {/* Label for the name */}
        <label className="about-lbl-name">Gisella Rosado Perrone</label>
      </div>
      <div className="about-header-social">
        {/* GitHub icon with click event handler */}
        <VscGithubInverted
          className="about-header-social-icon"
          onClick={handleClickGitHub}
        />
        
        {/* LinkedIn icon with click event handler */}
        <SiLinkedin
          className="about-header-social-icon"
          onClick={handleClickLinkedIn}
        />
      </div>
    </div>
  );
};

export default AboutHeader;
