import React from "react";
import UcsgLogo from '../../assets/images/education-experience/ucsg.png';
import PlatziLogo from '../../assets/images/education-experience/platzi.png';

const AboutCard = ({ institution, degree, years, logo, cardStyle }) => {

  const LogoComponent = logo === "ucsg" ? UcsgLogo : PlatziLogo;

  return (
    <div className="about-card">
      <div className={`about-card-header ${cardStyle}`}>
        <label>{institution}</label>
      </div>
      <div className="about-card-content">
        <div>
          <img className="about-card-img" src={LogoComponent} alt={institution} />
        </div>
        <div className="about-card-description">
          <label>{degree}</label>
          <br />
          <label className="about-card-years">{years}</label>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
