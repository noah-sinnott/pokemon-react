import { useState, useEffect } from 'react';
import './style.css'

export default function Filters({ setPokemons, pokemons }) {

  const [search, setSearch] = useState('')


  useEffect(() => {
    let res = {}
    for (let [key, value] of Object.entries(pokemons)) {
      if (value.name.includes(search.toLowerCase()))  res[key] = value;
    }
    setPokemons(res)
  }, [search])



  return (
    <div id='header'>

      <label>Search for pokemon</label>
      <input id='textInput' type='text' value={search} onChange={(event) => setSearch(event.target.value)} />
     
    </div> 
  
  );
}