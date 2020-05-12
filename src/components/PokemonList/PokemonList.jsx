import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

const PokemonList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('https://pokeapi.co/api/v2/pokemon/?limit=10');
      const results = response.data.results;
      results.forEach(async (pokemon) => {
        const url = pokemon.url;
        const data = await axios(url);
        const pokeData = await data;
        dispatch({ type: 'ADD_POKEMON', pokemon: pokeData });
      });
    };
    fetchData();
  }, [dispatch]);

  const pokemon = useSelector(state => state.pokemon).map(pokemon => {
    return <Pokemon number={pokemon.data.id} name={pokemon.data.name} />
  })

  return <div>{pokemon}</div>
};

export default PokemonList;