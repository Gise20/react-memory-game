import React, { useState } from 'react';
import HomeDifficulty from './HomeDifficulty';
import HomeRegion from './HomeRegion';
import "../../styles/Home/HomeCmp.css";

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
          <button className="btn-iniciar button-style-1 button-style-1-color-3">Start</button>
        </div>
      </div>
    </div>
  );
};
export default HomeDataPlay;
