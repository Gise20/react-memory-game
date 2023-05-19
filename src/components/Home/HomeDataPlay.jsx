import React from 'react'
import { useState } from 'react';
import HomeDifficulty from '@components/Home/HomeDifficulty';
import HomeRegion from '@components/Home/HomeRegion';

const HomeDataPlay = () => {
  return (
    <div>
      {/* Player data section */}
      <div className="home-player-data">
        {/* Player name input */}
        <div className="home-input-player-container">
          <input
            className="home-input-player-name"
            placeholder="Player name"
          ></input>
        </div>
        
        {/* HomeDifficulty component */}
        <HomeDifficulty />

        {/* HomeRegion component */}
        <HomeRegion />

        {/* Start button */}
        <div className="home-btn-iniciar-container">
          <button className="home-btn-iniciar button-style-1 button-style-1-color-3 home-btn_media_adjust">Start</button>
        </div>
      </div>
    </div>
  );
};

export default HomeDataPlay;
