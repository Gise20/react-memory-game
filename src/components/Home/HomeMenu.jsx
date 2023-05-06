import React, { useState } from 'react';
import '../../styles/Home/HomeCmp.css'
import { TfiMenu } from "react-icons/tfi";

const HomeMenu = () => {
  
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleButtonClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  return(
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
    </div>
  )
  
}

export default HomeMenu;
