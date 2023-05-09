import React from "react";
import EducationCard from "./AboutCard";
import educationData from "../../assets/data/educationData.json";

const AboutEducation = () => {
  return (
    <div className="about-education-container">
      <div>
        <label className="about-education-lbl">Education and Certificates</label>
      </div>
      <div className="about-education-cards-container">
        {educationData.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;