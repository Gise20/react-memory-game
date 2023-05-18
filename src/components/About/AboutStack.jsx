import React from 'react'
import stacksData from "../../assets/data/stacksData.json";
import AboutStackImage from "./AboutStackImage";

// Creating a functional component called AboutStack
const AboutStack = () => {
  return (
    <div className="about-stack-container">
      {/* Label for the "What's my stack?" section */}
      <label className="about-stacks-lbl">What's my stack?</label>
      <div className="about-stacks-icon-container">
        {/* Mapping over the stacks data and rendering the AboutStackImage component */}
        {stacksData.stacks.map((stack, index) => (
          <AboutStackImage
            key={index}
            alt={stack.alt}
            fileName={stack.fileName}
          />
        ))}
      </div>
      <div className="about-stack-footer">
        {/* Description about the stack */}
        <label>
          Full Stack Developer expert in web design, programming languages,
          databases, servers, APIs and Version Control Systems.
        </label>
      </div>
    </div>
  );
};

export default AboutStack;
