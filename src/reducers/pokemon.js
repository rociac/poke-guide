const ADD_POKEMON = 'ADD_POKEMON';

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
}

export default pokemonReducer;