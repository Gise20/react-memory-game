// Importing the logos for different institutions
import Ucsg from "../../assets/images/education-experience/ucsg.png";
import Platzi from "../../assets/images/education-experience/platzi.png";
import Efset from "../../assets/images/education-experience/efset.png";
import IkuSoft from "../../assets/images/education-experience/ikusoft.png";
import Freelancer from "../../assets/images/education-experience/freelancer.png";
import Bspi from "../../assets/images/education-experience/bspi.png";

// Creating a functional component called AboutCard that takes props as input
const AboutCard = ({ institution, degree, years, logo, cardStyle }) => {

  // Declaring a variable to store the LogoComponent
  let LogoComponent;

  // Switch statement to determine which logo component to assign based on the logo prop
  switch (logo) {
    case "ucsg":
      LogoComponent = Ucsg;
      break;
    case "platzi":
      LogoComponent = Platzi;
      break;
    case "efset":
      LogoComponent = Efset;
      break;
    case "ikusoft":
      LogoComponent = IkuSoft;
      break;
    case "freelancer":
      LogoComponent = Freelancer;
      break;
    case "bspi":
      LogoComponent = Bspi;
      break;
  }

  // JSX markup to render the AboutCard component
  return (
    <div className="about-card">
      <div className={`about-card-header ${cardStyle}`}>
        <label>{institution}</label>
      </div>
      <div className="about-card-content">
        <div>
          {/* Rendering the LogoComponent based on the assigned logo */}
          <img
            className="about-card-img"
            src={LogoComponent}
            alt={institution}
          />
        </div>
        <div className="about-card-description">
          <label>{degree}</label>
          <br />
          <label className="about-card-years">{years}</label>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
