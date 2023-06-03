import React, {useContext} from 'react'
import Context from "@context/Context";
import useGetRandomPokemon from '@hooks/useGetRandomPokemon';

const PlayGame = () => {
  const data = useContext(Context);
  const regionSelected = data.regions;
  console.log(data.numCards);
  console.log(regionSelected);
  console.log(useGetRandomPokemon(regionSelected, data.numCards));
 
  return (
    <div className='play-game-container'>PlayGame</div>
  )
}

export default PlayGame