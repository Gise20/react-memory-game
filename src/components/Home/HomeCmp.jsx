import React from "react";
import HomeMenu from "./HomeMenu";
import HomeDataPlay from "./HomeDataPlay";

import "../../styles/home.css";
import "../../styles/extras.css";
import "../../styles/generals.css";

const HomeCmp = () => {
  return (
    <div>
      <HomeMenu />
      <div className="home">
        <label className="home-lbl">Pokemon Memory Game</label>
      </div>
      <HomeDataPlay />
    </div>
  );
};

export default HomeCmp;
