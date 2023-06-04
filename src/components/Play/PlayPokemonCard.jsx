import React, { useState, useEffect, useContext } from "react";
import Context from "@context/Context";
import Swal from "sweetalert2";
import pokemonData from "@assets/data/pokemonData.json";

const PlayPokemonCard = ({ id, baseState, keyValue }) => {
  const data = useContext(Context);

  const [cardState, setCardState] = useState(baseState);
  const region = getRegion();
  const cardBack = require("@assets/images/pokemon-images/card-back.png");
  const imagePath = require(`@assets/images/pokemon-images/${region.toLowerCase()}/${id}.png`);

  useEffect(() => {
    if (data.cardOpened !== data.cardPending) {
      if (cardState === "Open") {
        if (data.cardsConfirmed.includes(id)) {
          setCardState("Confirmed");
        } else {
          const timer = setTimeout(() => {
            setCardState("Unopen");
            data.dispatch({ type: "SET_NUM_CARD_OPENED", payload: 0 });
          }, 1000);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [cardState, data.cardsConfirmed, data.cardOpened, data.cardPending, id]);

  useEffect(() => {
    if (data.cardsConfirmed.includes(id)) {
      setCardState("Confirmed");
    }
  }, [data.cardsConfirmed]);

  const handleCardClick = () => {
    console.log("NumOpened: ", data.numCardOpened);
    console.log("State: ", cardState);
    console.log("keyValue: ", keyValue);
    console.log("cardkeyOpened: ", data.cardkeyOpened);
    if (data.cardkeyOpened != keyValue || data.cardOpened == id) {
      if (cardState == "Unopen") {
        if (data.numCardOpened < 2) {
          handleCardLogic();
          handleClick();
        }
      }
    }
  };

  const handleCardLogic = () => {
    data.dispatch({ type: "SET_CARD_OPENED", payload: id });
    data.dispatch({ type: "SET_CARD_KEY_OPENED", payload: keyValue });
    data.dispatch({
      type: "SET_NUM_CARD_OPENED",
      payload: data.numCardOpened + 1,
    });
    if (data.cardPending === undefined) {
      data.dispatch({ type: "SET_CARD_PENDING", payload: id });
    } else {
      if (data.cardPending === id) {
        data.dispatch({ type: "ADD_CARD_CONFIRMED", payload: id });
        data.dispatch({ type: "SET_NUM_CARD_OPENED", payload: 0 });
        data.dispatch({ type: "SET_CARD_OPENED", payload: undefined });
        data.dispatch({ type: "SET_CARD_PENDING", payload: undefined });
        
        Swal.fire("carta igual");
        setCardState("Confirmed"); // Update the baseState to "Confirmed"
      } else {
        data.dispatch({ type: "SET_CARD_PENDING", payload: undefined });
      }
    }
  };

  const handleClick = () => {
    setCardState("Open");
  };

  function getRegion() {
    for (let i = 0; i < pokemonData.length; i++) {
      if (id >= pokemonData[i].starts && id <= pokemonData[i].finish) {
        return pokemonData[i].region;
      }
    }
  }

  return (
    <div className="play-game-card-container">
      {cardState === "Unopen" && (
        <img
          src={cardBack}
          alt="Card Back"
          className="play-game-card-close"
          onClick={handleCardClick}
        />
      )}
      {cardState === "Open" && (
        <img
          src={imagePath}
          alt="Card Back"
          className="play-game-card-open"
          onClick={handleCardClick}
        />
      )}

      {cardState === "Confirmed" && (
        <div className="play-game-card-open-confirm">
          <img
            src={imagePath}
            alt="Card Back"
            className="play-game-card-confirmed"
            onClick={handleCardClick}
          />
        </div>
      )}
    </div>
  );
};

export default PlayPokemonCard;
