import React, { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Context from "@context/Context";
import useGetRandomPokemon from "@hooks/useGetRandomPokemon";
import PlayPokemonCard from "@components/Play/PlayPokemonCard";
import Swal from "sweetalert2";

const PlayGame = () => {
  const data = useContext(Context);
  const navigate = useNavigate();
  const cards = useMemo(() => {
    return useGetRandomPokemon(data.regions, data.numCards);
  }, [data.regions, data.numCards]);

  const shuffledCards = useMemo(() => {
    // Duplicate each number in the array
    const duplicatedCards = cards.flatMap((num) => [num, num]);

    // Rearrange the duplicated Cards randomly
    const shuffled = [...duplicatedCards];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }, [cards]);

  useEffect(() => {
    if (data.cardsConfirmed.length == data.numCards) {
      // format time
      const hours = Math.floor(data.timeGameSec / 3600)
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((data.timeGameSec  % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const remainingSeconds = (data.timeGameSec  % 60).toString().padStart(2, "0");

      // calculate time bonus and show
      const timebonus = Math.floor(1000 - ((1000 * data.timeGameSec) / data.timeBonus));


      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Time bonus',
        text: `+${timebonus}`,
        showConfirmButton: false,
        timer: 2000
      })
      const score = data.score + timebonus
      
      setTimeout(function() {
        Swal.fire(
          "Congratulations",
          `You have finish the game on ${data.difficulty}  with a score of ${score} in ${hours}:${minutes}:${remainingSeconds}`,
          "success"
        );
      }, 2000);
      console.log(data.score);
      
      data.dispatch({ type: "SET_CLEAN_NEW_GAME", payload: null });
      navigate("/");
    }
  }, [data.cardsConfirmed]);

  return (
    <div className="play-game-container">
      {shuffledCards.map((card, index) => (
        <PlayPokemonCard
          key={index}
          id={card}
          baseState={
            data.cardsConfirmed.includes(card) ? "Confirmed" : "Unopen"
          }
          cardsConfirmed={data.cardsConfirmed}
          keyValue={index}
        />
      ))}
    </div>
  );
};

export default PlayGame;
