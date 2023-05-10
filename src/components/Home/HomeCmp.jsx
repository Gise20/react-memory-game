import HomeMenu from "./HomeMenu";
import HomeDataPlay from "./HomeDataPlay";

// Import CSS stylesheets
import "../../styles/home.css";
import "../../styles/extras.css";
import "../../styles/generals.css";

// Define a functional component called HomeCmp
const HomeCmp = () => {
  return (
    <div>
      <HomeMenu /> {/* Render the HomeMenu component */}
      <div className="home">
        <label className="home-lbl">Pokemon Memory Game</label> {/* Render a label for the game */}
      </div>
      <HomeDataPlay /> {/* Render the HomeDataPlay component */}
    </div>
  );
};

export default HomeCmp; // Export the HomeCmp component as the default export
