const ADD_POKEMON = 'ADD_POKEMON';

const addPokemon = responseData => ({
  type: ADD_POKEMON,
  responseData
});

export { addPokemon }