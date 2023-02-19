import { useState, useEffect } from 'react';
import {getData} from '../../api/pokemonAPI'
import PokemonPopup from '../PokemonPopup/PokemonPopup';
import './style.css'

export default function PokemonListItem({ pokemon, AllPokemon }) {
  
  const [ Popup, setPopup ] = useState(false);
 
  useEffect(() => {
     if (Popup) {
       document.body.style.overflow = "hidden";
     } else {
       document.body.style.overflow = 'scroll';
     }
   }, [Popup]);


  function handlePress() {
    setPopup(true)
  }

  return (
     
    <div>

      {pokemon &&
        <>
        {Popup && <PokemonPopup data={AllPokemon} current={pokemon.id} Popup={setPopup} />}
        
      <div >
       <button onClick={handlePress}>
        <img alt={pokemon.name.toUpperCase()} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
        <p>{pokemon.name.toUpperCase()}</p>
       </button>
      </div>
        </>
      }
      
     </div> 
  
  );
}