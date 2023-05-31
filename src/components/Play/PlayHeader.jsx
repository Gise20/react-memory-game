import React from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { useContext } from "react";
import Context from "@context/Context";

import PlayData from "@components/Play/PlayData";

const PlayHeader = () => {
  const data = useContext(Context)
  const navigate = useNavigate();

  // Function to handle the click event and navigate back to the "/home" route
  const handleClickBackToGame = () => {
    navigate("/home");
  };

  return (
    <div className="play-header-container">
      <div>
        <button className="button-style-4" role="button" onClick={handleClickBackToGame}>
          <TiArrowBack  size={30}/>
        </button>
        <label className="play-header-lbl-player-name">{data.playerName}</label>
      </div>
      <div>
        <PlayData />
      </div>
    </div>
  );
};

export default PlayHeader;