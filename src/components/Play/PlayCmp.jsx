import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "@context/Context";
import Swal from 'sweetalert2';
import PlayHeader from "@components/Play/PlayHeader";
import PlayGame from "@components/Play/PlayGame";
import useGetGameConfigData from "@hooks/useGetGameConfigData";

const PlayCmp = () => {
  // Get data from context and navigate
  const data = useContext(Context);
  const navigate = useNavigate();

  useGetGameConfigData()
    .then((promiseResult) => {})
    .catch(() => {
      Swal.fire("There has been an error loading the backend");
      navigate("/");
    });

  // Redirect if playerName is undefined
  useEffect(() => {
    if (data.playerName === undefined) {
      navigate("/");
    }
  }, [data.playerName, navigate]);

  return (
    <div className="play-cmp-main-conatiner">
      <PlayHeader />
      <PlayGame />
    </div>
  );
};

export default PlayCmp;
