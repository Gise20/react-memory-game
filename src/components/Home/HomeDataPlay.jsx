import React, { useState } from 'react';

import "../../styles/Home/HomeCmp.css";
import HomeDifficulty from './HomeDifficulty';
import HomeRegion from './HomeRegion';

const HomeDataPlay = () => {
  return (
    <div>
      <div className="player-data">
        <div className="input-player-container">
          <input
            className="input-player-name"
            placeholder="Player name"
          ></input>
        </div>
        <HomeDifficulty />
        <HomeRegion />
        <div className="btn-iniciar-container">
          <button className="btn-iniciar">Iniciar</button>
        </div>
      </div>
    </div>
  );
};
export default HomeDataPlay;
