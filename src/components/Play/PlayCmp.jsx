import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "@context/Context";
import Swal from "sweetalert2";
import axios from "axios";
import PlayHeader from "@components/Play/PlayHeader";
import PlayGame from "@components/Play/PlayGame";
import settings from "@assets/data/settings.json";

const PlayCmp = () => {
  // Get data from context and navigate
  const dataContext = useContext(Context);
  const backendHost = settings[0]["backend-host"];
  const navigate = useNavigate();
  
  useEffect(() => {
    if (dataContext.playerName === undefined) {
      navigate("/");
    }
  }, [dataContext.playerName, navigate]);

  // State variable to store data from API
  const [NumCards, setNumCards] = useState(null);
  const [TimeBonus, setTimeBonus] = useState(null);
  const [time, setTime] = useState(0);

  const [gameData, setGameData] = useState({
    score: 0,
    cardPending: undefined,
    cardOpened: undefined,
    cardsConfirmed: [],
    numCardOpened: 0,
    cardkeyOpened: undefined
  });
  // UseEffect hook to fetch data from API and update state variable
  useEffect(() => {
    const getApiData = async () => {
      try {
        const url = `${backendHost}/api/ConfigNumberCards/?format=json`;
        const response = await axios.get(url);
        if (response.status === 200) {
          setNumCards(response.data);
        } else {
          throw new Error(`Request failed with status code ${response.status}`);
        }
      } catch (error) {
        navigate("/");
        Swal.fire("There is a problem with the backend");
      }

      try {
        const url = `${backendHost}/api/ConfigTimeBonus/?format=json`;
        const response = await axios.get(url);
        if (response.status === 200) {
          setTimeBonus(response.data);
        } else {
          throw new Error(`Request failed with status code ${response.status}`);
        }
      } catch (error) {
        navigate("/");
        Swal.fire("There is a problem with the backend");
      }
    };

    getApiData();
  }, []);

  useEffect(() => {
    if (gameData.cardsConfirmed.length == dataContext.numCards  && dataContext.numCards >0) {
      // format time
      const hours = Math.floor(time / 3600)
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((time  % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const remainingSeconds = (time  % 60).toString().padStart(2, "0");

      // calculate time bonus and show
      const timebonus = Math.floor(1000 - ((1000 * time) / dataContext.timeBonus));

      Swal.fire({
        title: 'Time bonus',
        text: `+${timebonus}`,
        showConfirmButton: false,
        timer: 2000
      })

      const score = gameData.score + timebonus
      
      setTimeout(function() {
        Swal.fire(
          "Congratulations",
          `You have finish the game on ${dataContext.difficulty}  with a score of ${score} in ${hours}:${minutes}:${remainingSeconds}`,
          "success"
        );
      }, 2000);
      
      dataContext.dispatch({ type: "SET_CLEAN_NEW_GAME", payload: null });
      navigate("/");
    }
  }, [gameData]);

  // Render PlayHeader and PlayGame components if data is not null
  if (NumCards && TimeBonus) {
    let difficulty =
      dataContext.difficulty.charAt(0).toUpperCase() +
      dataContext.difficulty.slice(1).toLowerCase();
    dataContext.numCards = NumCards[0][difficulty];
    dataContext.timeBonus= TimeBonus[0][difficulty];
    return (
      <div className="play-cmp-main-conatiner">
        <PlayHeader setTime={setTime}/>
        <PlayGame gameData={gameData} setGameData={setGameData}/>
      </div>
    );
  } else {
    return null;
  }
};

export default React.memo(PlayCmp);
