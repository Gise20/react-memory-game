// Importing the ExperienceCard component and experienceData from a JSON file
import ExperienceCard from "./AboutCard";
import experienceData from "../../assets/data/experienceData.json";

// Creating a functional component called AboutExperience
const AboutExperience = () => {
  return (
    <div className="about-experience-container">
      <div>
        {/* Label for the experience section */}
        <label className="about-experience-lbl">Experience</label>
      </div>
      <div className="about-experience-cards-container">
        {/* Mapping over the experienceData array and rendering ExperienceCard components */}
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default AboutExperience;
