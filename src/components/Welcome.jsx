import React from 'react';
import '../styles/Home/welcome.css'
import WelcomeMenu from './WelcomeMenu';

const Welcome = () => {
	return (
		<div>
      <WelcomeMenu/>
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
