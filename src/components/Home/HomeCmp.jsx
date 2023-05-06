import React from 'react';
import HomeMenu from './HomeMenu';
import '../../styles/Home/HomeCmp.css'
import HomeDataPlay from './HomeDataPlay';

const HomeCmp = () => {
	return (
		<div>
      <HomeMenu/>
      <div className='Home'>
        <label className='lbl-Home'>Pokemon Memory Game</label>
      </div>
      <HomeDataPlay />
		</div>
	);
}

export default HomeCmp;
