import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './PokemonDetails.module.scss';

const PokemonDetails = ({ match }) => {
  const { params: { id } } = match;

  const pokemon = useSelector(state => state.pokemon).find(pokemon => pokemon.id === parseInt(id, 10));

  if (!pokemon) {
    return <Redirect to="/" />;
  }

  const abilities = pokemon.abilities.map(ability => <p className={styles.text}>{ability.ability.name}</p>);
  const types = pokemon.types.map(type => <p className={styles.text}>{type}</p>);
  const stats = pokemon.stats.map(stat => <p className={styles.stats}>{stat.stat.name}: {stat.base_stat}</p>);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <p className={styles.number}>{pokemon.id}</p>
          <img className={styles.image} src={pokemon.sprites.front_default} alt="Pokemon" />
        </div>
        <p className={styles.name}>{pokemon.name}</p>

        <div className={styles.cardText}>
          <div className={styles.cardRight}>
            <p className={styles.text}>Height: {pokemon.height}</p>
            <p className={styles.text}>Weight: {pokemon.weight}</p>
            <p className={styles.text}>Base Experience: {pokemon.base_experience}</p>
            <div>
              <p className={`${styles.center} ${styles.title} ${styles.mt}`}>Stats</p>
              {stats}
            </div>
          </div>
          <div className={styles.cardLeft}>
            <div>
              <p className={styles.title}>Abilities</p>
              {abilities}
            </div>
            <div className={styles.mt1}>
              <p className={styles.title}>Type</p>
              {types}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PokemonDetails;
