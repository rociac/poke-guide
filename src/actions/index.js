const ADD_POKEMON = 'ADD_POKEMON';

const addPokemon = pokemon => ({
  type: ADD_POKEMON,
  pokemon,
});

export default addPokemon;
