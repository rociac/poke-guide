import React from 'react';

const Filter = () => {
  return (
    <div>
      <span>Filter by: </span>
      <select name="Filter">
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
      </select>
    </div>
  );
};

export default Filter;
