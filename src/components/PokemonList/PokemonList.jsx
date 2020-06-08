import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PokemonList.module.scss';
import Filter from '../Filter/Filter';
import Pokemon from '../Pokemon/Pokemon';

const PokemonList = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch({ type: 'CHANGE_FILTER', filter: event.target.value });
  };
  const filter = useSelector(state => state.filter);
  let pokemon = useSelector(state => state.pokemon);
  if (filter !== 'All') {
    pokemon = pokemon.filter(poke => poke.types.includes(filter));
  }
  const pokeArr = pokemon.map(pokemon => {
    return (
      <Pokemon to={`/pokemon/${pokemon.id}`} key={pokemon.id} image={pokemon.sprites.front_default} name={pokemon.name} id={pokemon.id} />
    );
  });

  return (
    <>
      <Filter changeFilter={handleChange} />
      <div data-testid="pokemon" className={styles.container}>
        {pokeArr}
      </div>
    </>
  );
};

export default PokemonList;
