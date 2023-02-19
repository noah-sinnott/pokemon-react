import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon, getData } from '../api/pokemonAPI';
import PokemonListItem from './PokemonListItem/PokemonListItem'
import Filters from './Filters/Filters'


export default function App() {

  const [ Pokemon, setPokemon ] = useState({});
  const [ AllPokemon, setAllPokemon ] = useState({});
  const amount = 151

  useEffect(() => {
    refresh()
  }, [])
  
  useEffect(() => {
    setPokemon(AllPokemon)
  }, [AllPokemon])

  async function getDetails(url) {
    let res = await getData(url);
    let obj = {}
    obj[res.id] = res
    await setAllPokemon((prev) => {
      return {...obj, ...prev}
    })
  }

  async function refresh() { 
    let poke = await getPokemon(amount);
    await poke.results.forEach((pokemon) => {
      getDetails(pokemon.url);
    })
  }

  return (
    <div className="app">

      <Filters setPokemons={setPokemon} pokemons={AllPokemon} />

        {Object.keys(Pokemon).map(function (id) {
        return <div className='item'><PokemonListItem key={id} pokemon={Pokemon[id]} AllPokemon={Pokemon} /></div>
        })}
      
    </div>
  );
}

