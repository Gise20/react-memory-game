import React from "react";
import ExperienceCard from "./AboutCard";
import experienceData from "../../assets/data/experienceData.json";

const AboutExperience = () => {
  return (
    <div className="about-experience-container">
      <div>
        <label className="about-experience-lbl">Experience</label>
      </div>
      <div className="about-experience-cards-container">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default AboutExperience;
