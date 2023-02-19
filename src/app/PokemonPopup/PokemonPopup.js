import './style.css'
import { useState, useEffect } from 'react'
import {getData} from '../../api/pokemonAPI'

export default function SinglePokemon({data, current, Popup}) {
  
  const [list, setList] = useState(Object.values(data))
  const [Pokemon, setPokemon ] = useState(data[current]);
  const [ abilities, setAbilites ] = useState([]);
  const [ types, setTypes ] = useState([]);

  function getIndex() { 
    return list.indexOf(Pokemon)
  }

  async function goToRight() {
    let index = getIndex()
    if (list[index + 1]) setPokemon(list[index + 1])
}
  
  async function goToLeft() {
    let index = getIndex()
    if (list[index - 1]) setPokemon(list[index - 1])
  }
  
  useEffect(()=> {
    let abl = Pokemon.abilities.map((item) => { return item.ability.name })
    setAbilites(abl)
    let typ = Pokemon.types.map((item) => { return item.type.name })
    setTypes(typ)
  }, [Pokemon])



  return (
    <div id='background'>
      <div id='container'>           
           
        <p id='title'>Name : {Pokemon.name.toUpperCase()}</p>
        
        <div id='mainData'>
          
         <img alt={Pokemon.name.toUpperCase()} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Pokemon.id}.png`} id='image' />
             
          <div id='MainStats'>
               <p className='text'>Height: {Pokemon.height}</p>
               <p className='text'>Weight: {Pokemon.weight}</p>
               <p className='text'>Pokedex id: {Pokemon.id}</p>
               <p className='text'>Base experience: {Pokemon.base_experience}</p>
               <p className='text'>Forms: {Pokemon.forms.length}</p>
                <p className='text'>Moves: {Pokemon.moves.length}</p>
                <p className='text'>Types: {types.join(", ")}</p>
                <p className='text'>Abilities: {abilities.join(", ")}</p>
          </div>
          
        </div>


          <div className='stats'>
              {Pokemon.stats.map((item) => {
                return <p key={item.stat.name} className='secStats'>{item.stat.name.toUpperCase()}: {item.base_stat} </p>
                 })}
          </div>

<div id='buttons'>
       <div className='button'>
             <button
             onClick={() => goToLeft()}>
             <p className='buttontext'>Back</p>
              </button>
             </div>
          
             <div className='button'>
             <button
             onClick={() => Popup(false)}>
             <p className='buttontext'>Close</p>
        </button>
             </div>
             
             <div className='button'>
               <button
             onClick={() => goToRight()}>
             <p className='buttontext'>Next</p>
            </button>
             </div>
          </div>
          


          
       </div>
      </div>
  );
}