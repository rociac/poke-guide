import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './PokemonList.module.scss';


const PokemonList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const responseTypes = await axios('https://pokeapi.co/api/v2/type');
      const types = responseTypes.data.results;
      console.log(types);
      dispatch({ type: 'ADD_TYPES', types: types });
    };
    fetchData();
  }, [dispatch]);

  const pokemon = useSelector(state => state.pokemon).map(pokemon => {
    return (
      <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className={styles.pokeList} >
        <div>
          <img src={pokemon.img} alt="" />
        </div>
        <div className={styles.text}>
          <span>#{pokemon.id}</span>
          <p>{pokemon.name}</p>
        </div>
      </Link>
    );
  });

  return <div className={styles.container}>{pokemon}</div>;
};

export default PokemonList;
