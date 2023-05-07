import React, { useState } from 'react';
import HomeDifficulty from './HomeDifficulty';
import HomeRegion from './HomeRegion';

const HomeDataPlay = () => {
  return (
    <div>
      <div className="home-player-data">
        <div className="home-input-player-container">
          <input
            className="home-input-player-name"
            placeholder="Player name"
          ></input>
        </div>
        <HomeDifficulty />
        <HomeRegion />
        <div className="home-btn-iniciar-container">
          <button className="home-btn-iniciar button-style-1 button-style-1-color-3">Start</button>
        </div>
      </div>
    </div>
  );
};
export default HomeDataPlay;
