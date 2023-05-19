import React from 'react'
// Importing the AboutHeader and AboutData components
import AboutHeader from "@components/About/AboutHeader";
import AboutData from "@components/About/AboutData";

// Creating a functional component called AboutCmp
const AboutCmp = () => {
  return (
    <div>
      {/* Rendering the AboutHeader component */}
      <AboutHeader />

      {/* Rendering the AboutData component */}
      <AboutData />
    </div>
  );
};

export default AboutCmp;
