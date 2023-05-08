import React from "react";
import AboutMe from "./AboutMe";
import AboutStack from "./AboutStack";

const AboutData = () => {
  return (
    <div>
      <div className="about-data-container">
        <div className="about-data">
          <AboutMe />
          <AboutStack />
        </div>
      </div>
    </div>
  );
};

export default AboutData;
