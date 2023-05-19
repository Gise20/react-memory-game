import React from 'react'
// Creating a functional component called AboutStackImage
const AboutStackImage = ({ alt, fileName }) => {
  // Dynamically generating the image path based on the fileName prop
  const imagePath = require(`@assets/images/stacks-icons/${fileName}`);

  return (
    <div>
      <div className="about-stack-circle-container">
        {/* Container for the stack icon */}
        <div className="about-stack-circle-shadow">
          {/* Shadow effect for the stack icon */}
          <div className="about-stack-circle">
            {/* Actual stack icon */}
            <img
              src={imagePath}
              alt={alt}
              className="about-stack-centered-image"
              title={alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStackImage;
