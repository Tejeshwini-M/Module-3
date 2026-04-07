import React from 'react'
import axios from "axios";

const pokemondata = () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const getAllPokemonList = async() => {
    const {data} = await axios.get(URL);
    return data;
} 
    return (
    <div>{getAllPokemonList()}</div>
  )
}

export default pokemondata