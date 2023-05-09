import React from "react";
import AboutEducationCard from "./AboutEducationCard";
import ucsgLogo from "../../assets/images/education-experience/ucsg.png";
import platziLogo from "../../assets/images/education-experience/platzi.png";

const AboutEducation = () => {
  const educationData = [
    {
      institution: "Universidad Cátolica de Santiago de Guayaquil",
      degree: "Ingeniería en Sistemas Computacionales",
      years: "2012 - 2017",
      logo: ucsgLogo,
      cardStyle: "about-education-card-ucsg",
    },
    {
      institution: "Platzi",
      degree: "Desarrollo web",
      years: "2023 - Actualidad",
      logo: platziLogo,
      cardStyle: "about-education-card-platzi",
    },
  ];

  return (
    <div className="about-education-container">
      <div>
        <label className="about-education-lbl">Education</label>
      </div>
      <div className="about-education-cards-container">
        {educationData.map((education, index) => (
          <AboutEducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;
