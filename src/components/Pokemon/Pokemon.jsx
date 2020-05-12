import React from 'react';
import styles from './Pokemon.module.scss';

const Pokemon = ({ name, number }) => {
  return (
    <div className={styles.container}>
      <p>#{number}</p>
      <p>{name}</p>
    </div>
  );
}

export default Pokemon;