import React, { useState } from 'react';

import "../../styles/Home/welcome.css";
import WelcomeDifficulty from './WelcomeDifficulty';
import WelcomeRegion from './WelcomeRegion';

const WelcomeDataPlay = () => {
  return (
    <div>
      <div className="player-data">
        <div className="input-player-container">
          <input
            className="input-player-name"
            placeholder="Player name"
          ></input>
        </div>
        <WelcomeDifficulty />
        <WelcomeRegion />
        <div className="btn-iniciar-container">
          <button className="btn-iniciar">Iniciar</button>
        </div>
      </div>
    </div>
  );
};
export default WelcomeDataPlay;
