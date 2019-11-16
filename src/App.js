import {render} from 'react-dom';
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import PokemonList from './components/PokemonList';

//This is the root component
class PokeApp extends Component{
  render(){
    return <div className="pokeapp">
      <h1> The Kanto PokeDex! </h1>
      <PokemonList/>
    </div>;
  }
}

export default PokeApp;
