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

  // Render PlayHeader and PlayGame components if data is not null
  if (NumCards && TimeBonus) {
    let difficulty =
      dataContext.difficulty.charAt(0).toUpperCase() +
      dataContext.difficulty.slice(1).toLowerCase();
    dataContext.numCards = NumCards[0][difficulty];
    dataContext.timeBonus= TimeBonus[0][difficulty];
    return (
      <div className="play-cmp-main-conatiner">
        <PlayHeader />
        <PlayGame />
      </div>
    );
  } else {
    return null;
  }
};

export default PlayCmp;
