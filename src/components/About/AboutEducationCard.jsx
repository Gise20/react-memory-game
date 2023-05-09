import React from "react";

const EducationCard = ({ institution, degree, years, logo, cardStyle }) => {
  return (
    <div className="about-education-card">
      <div className={`about-education-card-header ${cardStyle}`}>
        <label>{institution}</label>
      </div>
      <div className="about-education-card-content">
        <div>
          <img className="about-education-card-img" src={logo} alt={institution} />
        </div>
        <div className="about-education-card-description">
          <label>{degree}</label>
          <br />
          <label className="about-education-card-years">{years}</label>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
