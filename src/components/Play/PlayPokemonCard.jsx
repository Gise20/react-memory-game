import React, { useState, useEffect, useContext } from "react";
import Context from "@context/Context";
import pokemonData from "@assets/data/pokemonData.json";

const PlayPokemonCard = ({ id, baseState, keyValue, gameData, setGameData}) => {
  const data = useContext(Context);
  const [cardState, setCardState] = useState(baseState);
  // Get the region based on the Pokemon's ID
  const region = getRegion();

  // Set the image paths for the card back and the opened card
  const cardBack = require("@assets/images/pokemon-images/card-back.png");
  const imagePath = require(`@assets/images/pokemon-images/${region.toLowerCase()}/${id}.png`);

  // Handle card state changes when data related to card opening changes
  useEffect(() => {
    if (gameData.cardOpened !== gameData.cardPending) {
      if (cardState === "Open") {
        if (gameData.cardsConfirmed.includes(id)) {
          setCardState("Confirmed");
        } else {
          const timer = setTimeout(() => {
            setCardState("Unopen");
            setGameData(prevState => ({
              ...prevState,
              numCardOpened: 0
            }));
          }, 1000);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [cardState, gameData.cardsConfirmed, gameData.cardOpened, gameData.cardPending, id]);
 
  // Handle card state changes when the list of confirmed cards is updated
  useEffect(() => {
    if (gameData.cardsConfirmed.includes(id)) {
      setCardState("Confirmed");
    }
  }, [gameData.cardsConfirmed]);

  // Handle card click event
  const handleCardClick = () => {
    if (gameData.cardkeyOpened != keyValue || gameData.cardOpened == id) {
      if (cardState == "Unopen" && gameData.numCardOpened < 2) {
        handleCardLogic();
        handleClick();
      }
    }
  };

  // Update the card state and related data when a card is opened
  const handleCardLogic = () => {
    setGameData(prevState => ({
      ...prevState,
      cardOpened: id,
      cardkeyOpened: keyValue,
      numCardOpened: gameData.numCardOpened + 1
    }));

    if (gameData.cardPending === undefined) {
      setGameData(prevState => ({
        ...prevState,
        cardPending: id,
      }));
    } else {
      if (gameData.cardPending === id) {
        setGameData(prevState => ({
          ...prevState,
          cardsConfirmed: [...prevState.cardsConfirmed, id],
          numCardOpened: 0,
          cardOpened: undefined,
          cardPending: undefined,
          score: gameData.score + 200
        }))
      } else {
        setGameData(prevState => ({
          ...prevState,
          cardPending: undefined,
        }));
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

export default React.memo(PlayPokemonCard);
