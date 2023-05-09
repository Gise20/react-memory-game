import React from "react";
import Ucsg from "../../assets/images/education-experience/ucsg.png";
import Platzi from "../../assets/images/education-experience/platzi.png";
import Efset from "../../assets/images/education-experience/efset.png";
import IkuSoft from "../../assets/images/education-experience/ikusoft.png";
import Freelancer from "../../assets/images/education-experience/freelancer.png";
import Bspi from "../../assets/images/education-experience/bspi.png";

const AboutCard = ({ institution, degree, years, logo, cardStyle }) => {
  let LogoComponent;

  switch (logo) {
    case "ucsg":
      LogoComponent = Ucsg;
      break;
    case "platzi":
      LogoComponent = Platzi;
      break;
    case "efset":
      LogoComponent = Efset;
      break;
    case "ikusoft":
      LogoComponent = IkuSoft;
      break;
    case "freelancer":
      LogoComponent = Freelancer;
      break;
    case "bspi":
      LogoComponent = Bspi;
      break;
  }

  return (
    <div className="about-card">
      <div className={`about-card-header ${cardStyle}`}>
        <label>{institution}</label>
      </div>
      <div className="about-card-content">
        <div>
          <img
            className="about-card-img"
            src={LogoComponent}
            alt={institution}
          />
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
