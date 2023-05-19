import React from 'react'
import { HiDocumentText } from "react-icons/hi";
import imgStock from "@assets/images/stock-images/stock-image1.png";

// Creating a functional component called AboutProject
const AboutProject = () => {
  return (
    <div className="about-project-container">
      <div>
        {/* Image */}
        <img className="about-project-img-stock" src={imgStock} alt="Stock Image" />
      </div>
      <div>
        <div>
          {/* Label for the "About this project" section */}
          <label className="about-project-lbl">About this project</label>
        </div>
        <div className="about-me-description-container">
          {/* Description about the project */}
          <label>
            This is a personal project demonstrating my proficiency in creating
            a captivating memory game inspired by the Pokémon franchise.
            Developed using HTML, CSS, JavaScript, React.js, and Node.js, the
            project serves as a testament to my skills and dedication. The
            entire source code is openly accessible on my GitHub repository,
            allowing interested individuals to explore and gain insights from
            it.
          </label>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
