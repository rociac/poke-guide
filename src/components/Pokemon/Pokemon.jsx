import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Pokemon.module.scss';

const Pokemon = ({
  name,
  id,
  image,
  to,
}) => (
    <Link to={to} className={styles.container}>
      <div className={styles.containerTop}>
        <p className={styles.pokeNumber}>{id}</p>
        <img src={image} alt="Pokemon" />
      </div>
      <p className={styles.pokeName}>{name}</p>
    </Link>
  );

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Pokemon;
