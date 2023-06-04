import React, { useState, useEffect, useContext } from "react";
import Context from "@context/Context";
import pokemonData from "@assets/data/pokemonData.json";

const PlayPokemonCard = ({ id, baseState, keyValue }) => {
  const data = useContext(Context);
  const [cardState, setCardState] = useState(baseState);

  // Get the region based on the Pokemon's ID
  const region = getRegion();

  // Set the image paths for the card back and the opened card
  const cardBack = require("@assets/images/pokemon-images/card-back.png");
  const imagePath = require(`@assets/images/pokemon-images/${region.toLowerCase()}/${id}.png`);

  // Handle card state changes when data related to card opening changes
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


  // Handle card state changes when the list of confirmed cards is updated
  useEffect(() => {
    if (data.cardsConfirmed.includes(id)) {
      setCardState("Confirmed");
    }
  }, [data.cardsConfirmed]);

  // Handle card click event
  const handleCardClick = () => {
    if (data.cardkeyOpened != keyValue || data.cardOpened == id) {
      if (cardState == "Unopen" && data.numCardOpened < 2) {
        handleCardLogic();
        handleClick();
      }
    }
  };

  // Update the card state and related data when a card is opened
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

      } else {
        data.dispatch({ type: "SET_CARD_PENDING", payload: undefined });
      }
    }
  };

  // Update the card state to "Open" when clicked
  const handleClick = () => {
    setCardState("Open");
  };

  // Get the region based on the Pokemon's ID
  function getRegion() {
    const pokemon = pokemonData.find(
      (pokemon) => id >= pokemon.starts && id <= pokemon.finish
    );
    return pokemon ? pokemon.region : null;
  }

  return (
    <div className="play-game-card-container">
      {/* Cards unopen */}
      {cardState === "Unopen" && (
        <img
          src={cardBack}
          alt="Card Back"
          className="play-game-card-close"
          onClick={handleCardClick}
        />
      )}
      {/* Cards open */}
      {cardState === "Open" && (
        <img
          src={imagePath}
          alt="Card opened"
          className="play-game-card-open"
          onClick={handleCardClick}
        />
      )}
      {/* Cards confirmed */}
      {cardState === "Confirmed" && (
        <div className="play-game-card-open-confirm">
          <img
            src={imagePath}
            alt="Card confirmed"
            className="play-game-card-confirmed"
            onClick={handleCardClick}
          />
        </div>
      )}
    </div>
  );
};

export default PlayPokemonCard;
