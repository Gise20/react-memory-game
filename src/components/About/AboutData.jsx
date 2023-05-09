import React from "react";
import AboutMe from "./AboutMe";
import AboutStack from "./AboutStack";
import AboutProject from "./AboutProject";
import AboutEducation from "./AboutEducation";
import AboutExperience from './AboutExperience'

const AboutData = () => {
  return (
    <div>
      <div className="about-data-container">
        <div className="about-data">
          <AboutMe />
          <AboutStack />
          <AboutProject />
          <AboutEducation />
          <AboutExperience />
        </div>
      </div>
    </div>
  );
};

export default AboutData;
