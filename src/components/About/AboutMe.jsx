import React from "react";
import { HiDocumentText } from "react-icons/hi";
import imgStock from "../../assets/images/stock-images/stock-image.png";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div>
        <div>
          <label className="about-me-lbl">About Me</label>
        </div>
        <div className="about-me-description-container">
          <label>
            Hi, my name is Gisella Rosado Perrone I am a Full-Stack Software
            Engineer with 3+ years of experience in the design, development,
            integration and implementation of Technology Solutions and Project
            Management IT with use of agile methodologys.
          </label>
          <div className="about-me-resume-container">
            <button class="button-style-2 about-me-btn-resume" role="button">
              See my resume <HiDocumentText className="about-me-resume-icon" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <img className="about-me-img-stock" src={imgStock}></img>
      </div>
    </div>
  );
};

export default AboutMe;
