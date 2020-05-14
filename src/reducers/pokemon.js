const ADD_POKEMON = 'ADD_POKEMON';
const ADD_POKETYPES = 'ADD_POKETYPES';

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return [...state, action.pokemon];
    case ADD_POKETYPES:
      return [...state, action.pokeTypes];
    default:
      return state;
  }
};

export default pokemonReducer;
