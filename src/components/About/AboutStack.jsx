import React from "react";
import stacksData from "../../assets/data/stacksData.json";
import AboutStackImage from "./AboutStackImage";

const AboutStack = () => {
  return (
    <div className="about-stack-container">
      <label className="about-stacks-lbl">What's my stack?</label>
      <div className="about-stacks-icon-container">
        {stacksData.stacks.map((stack, index) => (
          <AboutStackImage
            key={index}
            alt={stack.alt}
            fileName={stack.fileName}
          />
        ))}
      </div>
      <div className="about-stack-footer">
        <label>
          Full Stack Developer expert in web design, programming languages,
          databases, servers, APIs and Version Control Systems.
        </label>
      </div>
    </div>
  );
};

export default AboutStack;
