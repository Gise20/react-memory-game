import React, { useContext } from "react";
import Context from "@context/Context";
import pokemonData from "@assets/data/pokemonData.json";

const useGetRandomPokemon = (regionSelected, count) => {
  const generateRandomNumbers = () => {
    const generatedNumbers = new Set();
    const maxTries = 5000; // Maximum number of tries to generate unique numbers
    let tries = 0;

    while (generatedNumbers.size < count && tries < maxTries) {
      const randomRegionIndex = Math.floor(
        Math.random() * regionSelected.length
      );
      const region = regionSelected[randomRegionIndex];

      const selectedRegionData = pokemonData.find(
        (data) => data.region === region
      );

      if (selectedRegionData) {
        const { starts, finish } = selectedRegionData;
        const randomPokemonNumber =
          Math.floor(Math.random() * (finish - starts + 1)) + starts;
        generatedNumbers.add(randomPokemonNumber);
        tries++;
      }
    }

    return Array.from(generatedNumbers);
  };

  return generateRandomNumbers();
};

export default useGetRandomPokemon;
