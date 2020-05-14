import React from 'react';
import { useSelector } from 'react-redux';

const Filter = ({ changeFilter }) => {
  const types = useSelector(state => state.pokeTypes);
  const options = types.map(type => {
    return <option value={type.name}>{type.name}</option>;
  });

  return (
    <div>
      <span>Filter by: </span>
      <select name='Filter' onChange={changeFilter}>
        {options}
      </select>
    </div>
  );
};

export default Filter;
