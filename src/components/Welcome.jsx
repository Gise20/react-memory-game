import React, { useState } from 'react';
import '../styles/Home/welcome.css'
import { TfiMenu } from "react-icons/tfi";

const Welcome = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleButtonClick = () => {
    setMenuVisible(!isMenuVisible);
  };

	return (
		<div>
			<div className='header'>
        <label className='lbl-header'>HighScores</label>
        <label className='marginL lbl-header'>About</label>
      </div>
      
      <button className='menu-button' onClick={handleButtonClick}>
        <TfiMenu size={30}/>
      </button>

      {isMenuVisible && (
        <div className='menu'>
          <div className='menu-option'>
            <label>HighScores</label>
          </div>
          <div className='menu-option'>
            <label>About</label>
          </div>
        </div>
      )}
      <div className='welcome'>
        <label className='lbl-welcome'>Pokemon Memory Game</label>
      </div>
      <div className='player-data'>
        <div className='input-player-container'>
          <input className='input-player-name' placeholder="Player name"></input>
        </div>
        <div className='lbl-difficulty-container'>
          <label className='lbl-difficulty'>Difficulty:</label>
        </div>
        <div className='btn-difficulty-container'>
          <button className='btn-difficulty'>Facil</button>
          <button className='btn-difficulty'>Medio</button>
          <button className='btn-difficulty'>Dificil</button>
        </div>
        <div className='btn-iniciar-container'>
          <button className='btn-iniciar'>Iniciar</button>
        </div>
      </div>
		</div>
	);
}

export default Welcome;
