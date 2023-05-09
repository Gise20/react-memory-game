import React from "react";
import AboutMe from "./AboutMe";
import AboutStack from "./AboutStack";
import AboutProject from "./AboutProject";

const AboutData = () => {
  return (
    <div>
      <div className="about-data-container">
        <div className="about-data">
          <AboutMe />
          <AboutStack />
          <AboutProject />
        </div>
      </div>
    </div>
  );
};

export default AboutData;
