import React from "react";
import ucsgLogo from "../../assets/images/education-experience/ucsg.png";
import platziLogo from "../../assets/images/education-experience/platzi.png";

const AboutEducation = () => {
  return (
    <div className="about-education-container">
      <div>
        <label className="about-education-lbl">Education</label>
      </div>
      <div className="about-education-cards-container">
        <div className="about-education-card">
          <div className="about-education-card-header about-education-card-ucsg">
            <label>Universidad Cátolica de Santiago de Guayaquil</label>
          </div>
          <div className="about-education-card-content">
            <div>
              <img className="about-education-card-img" src={ucsgLogo}></img>
            </div>
            <div className="about-education-card-description">
              <label>Ingeniería en Sistemas Computacionales</label>
              <br/>
              <label className="about-education-card-years">2012 - 2017</label>
            </div>            
          </div>

          
        </div>
        <div className="about-education-card">
          <div className="about-education-card-header about-education-card-platzi">
            <label>Platzi</label>
          </div>
          <div className="about-education-card-content">
            <div>
              <img className="about-education-card-img" src={platziLogo}></img>
            </div>
            <div className="about-education-card-description">
              <label>Educación continua</label>
              <br/>
              <label className="about-education-card-years">2023 - Actualidad</label>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEducation;
