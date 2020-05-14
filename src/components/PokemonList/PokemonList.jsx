import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './PokemonList.module.scss';
import Filter from '../Filter/Filter';

const PokemonList = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch({ type: 'CHANGE_FILTER', filter: event.target.value });
  };
  const filter = useSelector(state => state.filter);
  let pokemon = useSelector(state => state.pokemon);
  if (filter !== 'All') {
    pokemon = pokemon.filter(poke => poke.types.includes(filter));
    console.log(pokemon);
  }
  const pokeArr = pokemon.map(pokemon => {
    return (
      <Link
        to={`/pokemon/${pokemon.id}`}
        key={pokemon.id}
        className={styles.pokeList}
      >
        <div>
          <img src={pokemon.img} alt='' />
        </div>
        <div className={styles.text}>
          <span>#{pokemon.id}</span>
          <p>{pokemon.name}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className={styles.container}>
      <Filter changeFilter={handleChange} />
      {pokeArr}
    </div>
  );
};

export default PokemonList;
