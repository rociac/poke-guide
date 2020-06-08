const ADD_POKETYPES = 'ADD_POKETYPES';

const pokemonTypesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKETYPES:
      return [...state, action.pokeTypes];
    default:
      return state;
  }
};

export default pokemonTypesReducer;
