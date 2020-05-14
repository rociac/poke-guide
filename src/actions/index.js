const ADD_POKEMON = 'ADD_POKEMON';
const ADD_TYPES = 'ADD_TYPES';

const addPokemon = pokemon => ({
  type: ADD_POKEMON,
  pokemon,
});

const addPokemonType = pokeTypes => ({
  type: ADD_TYPES,
  pokeTypes,
});

export { addPokemon, addPokemonType };
