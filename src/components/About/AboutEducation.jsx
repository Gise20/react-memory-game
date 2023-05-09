import React from "react";

// Importing the EducationCard component and educationData from a JSON file
import EducationCard from "./AboutCard";
import EducationData from "../../assets/data/educationData.json";

// Creating a functional component called AboutEducation
const AboutEducation = () => {
  return (
    <div className="about-education-container">
      <div>
        {/* Label for the education section */}
        <label className="about-education-lbl">
          Education and Certificates
        </label>
      </div>
      <div className="about-education-cards-container">
        {/* Mapping over the educationData array and rendering EducationCard components */}
        {EducationData.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;
