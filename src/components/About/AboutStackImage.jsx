import React from "react";

const AboutStackImage = ({ alt, fileName }) => {
  const imagePath = require(`../../assets/images/stacks-icons/${fileName}`);
  return (
    <div>
      <div className="about-stack-circle-container">
        <div className="about-stack-circle-shadow">
          <div className="about-stack-circle">
            <img
              src={imagePath}
              alt={alt}
              className="about-stack-centered-image "
              title={alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStackImage;
