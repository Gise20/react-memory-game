import React from 'react'
import HomeMenu from "@components/Home/HomeMenu";
import HomeDataPlay from "@components/Home/HomeDataPlay";


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
