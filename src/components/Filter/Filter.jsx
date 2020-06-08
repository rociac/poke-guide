import React from 'react';
import { useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ changeFilter }) => {
  const types = useSelector(state => state.pokeTypes);
  const options = types.map(type => (
    <option key={type.name} value={type.name}>{type.name}</option>
  ));
  return (
    <div className={styles.container}>
      <span>Filter by: </span>
      <span className={styles.box}>
        <select name="Filter" onChange={changeFilter}>
          {options}
        </select>
      </span>
    </div>
  );
};

Filter.propTypes = {
  changeFilter: Proptypes.func.isRequired,
};

export default Filter;
