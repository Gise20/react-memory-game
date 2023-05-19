import React from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

import PlayData from "@components/Play/PlayData";

const PlayHeader = () => {
  const navigate = useNavigate();

  // Function to handle the click event and navigate back to the "/home" route
  const handleClickBackToGame = () => {
    navigate("/home");
  };

  return (
    <div className="play-header-container">
      <div>
        <button class="button-style-4" role="button" onClick={handleClickBackToGame}>
          <TiArrowBack  size={30}/>
        </button>
        <label className="play-header-lbl-player-name">Gise20</label>
      </div>
      <div>
        <PlayData />
      </div>
    </div>
  );
};

export default PlayHeader;
