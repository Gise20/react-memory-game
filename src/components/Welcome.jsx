import React from 'react';
import '../styles/Home/welcome.css'
const Welcome = () => {
	return (
		<div>
			<div className='header'>
        <label className='lbl-header'>HighScores</label>
        <label className='marginL lbl-header'>About</label>
      </div>
      <div className='welcome'>
        <label className='lbl-welcome'>Pokemon Memory Game</label>
      </div>
      <div className='player-data'>s</div>
		</div>
	);
}

export default Welcome;
