import React, { useContext, useEffect, useMemo } from "react";
import Context from "@context/Context";
import useGetRandomPokemon from "@hooks/useGetRandomPokemon";
import PlayPokemonCard from "@components/Play/PlayPokemonCard";

const PlayGame = () => {
  const data = useContext(Context);
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

  return (
    <div className="play-game-container">
      {shuffledCards.map((card, index) => (
        <PlayPokemonCard
          key={index}
          id={card}
          baseState={data.cardsConfirmed.includes(card) ? "Confirmed" : "Unopen"}
          cardsConfirmed={data.cardsConfirmed}
          keyValue={index}
        />
      ))}
    </div>
  );
};

export default PlayGame;
