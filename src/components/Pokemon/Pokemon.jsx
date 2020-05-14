import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styles from './Pokemon.module.scss';
import { useSelector, useDispatch } from 'react-redux';

const Pokemon = ({ match }) => {
  const { params: { id } } = match;



  const pokemon = useSelector(state => state.pokemon)
    .filter(poke => poke.id === parseInt(id, 10));
  // pokemon.data.types.forEach(type => types.push(type.type.name));

  return (
    <>
      <img src={pokemon[0].img} alt="" />
      <p>
        {pokemon[0].name}
      </p>
    </>
  );
};

// Pokemon.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,
// };

export default Pokemon;
