import React from "react";
import PlayHeader from "@components/Play/PlayHeader";
import PlayGame from "@components/Play/PlayGame";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Context from "@context/Context";

const PlayCmp = () => {
  const data = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.playerName === undefined) {
      navigate("/");
    }
  }, [data.playerName]);

  return (
    <div className="play-cmp-main-conatiner">
      <PlayHeader />
      <PlayGame />
    </div>
  );
};

export default PlayCmp;
