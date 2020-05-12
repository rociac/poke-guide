import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pokemon.module.scss';

const Pokemon = ({ name, number }) => {
  return (
    <div className={styles.container}>
      <p>
        #
        {number}
      </p>
      <p>{name}</p>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Pokemon;
