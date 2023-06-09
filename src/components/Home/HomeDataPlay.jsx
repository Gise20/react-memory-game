import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import HomeDifficulty from '@components/Home/HomeDifficulty';
import HomeRegion from '@components/Home/HomeRegion';
import Context from '@context/Context';

const HomeDataPlay = () => {
  // Hooks
  const navigate = useNavigate();
  const data = useContext(Context);
  const [playerName, setPlayerName] = useState('');
  const [selectedDifficulty, setSelectedDifficulty,] = useState(data.difficulty);
  const [selectedRegions, setSelectedRegions,] = useState(data.regions);

  // Event handler for start button
  const handleStart = () => {
    if (playerName.toString().trim().length === 0) {
      Swal.fire('Player name needed');
    } else {
      data.dispatch({ type: "SET_REGIONS", payload: selectedRegions });
      data.dispatch({ type: "SET_DIFFICULTY", payload: selectedDifficulty });
      data.dispatch({ type: "SET_PLAYER_NAME", payload: playerName });
      data.dispatch({ type: "SET_SCORE", payload: 0 });
      navigate('/play');
    }
  };

  // Event handler for player name input change
  const handleChangePlayerName = (event) => {
    setPlayerName(event.target.value);
  };
  return (
    <div>
      {/* Player data section */}
      <div className="home-player-data">
        {/* Player name input */}
        <div className="home-input-player-container">
          <input
            className="home-input-player-name"
            placeholder="Player name"
            onChange={handleChangePlayerName}
          />
        </div>

        {/* HomeDifficulty component */}
        <HomeDifficulty setSelectedDifficulty={setSelectedDifficulty}/>

        {/* HomeRegion component */}
        <HomeRegion setMainSelectedRegions={setSelectedRegions}/>

        {/* Start button */}
        <div className="home-btn-iniciar-container">
          <button
            className="home-btn-iniciar button-style-1 button-style-1-color-3 home-btn_media_adjust"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDataPlay;
