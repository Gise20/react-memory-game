import React from 'react';
import WelcomeMenu from './WelcomeMenu';
import '../../styles/Home/welcome.css'
import WelcomeDataPlay from './WelcomeDataPlay';

const Welcome = () => {
	return (
		<div>
      <WelcomeMenu/>
      <div className='welcome'>
        <label className='lbl-welcome'>Pokemon Memory Game</label>
      </div>
      <WelcomeDataPlay />
		</div>
	);
}

export default Welcome;
