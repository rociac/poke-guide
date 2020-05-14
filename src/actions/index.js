const ADD_POKEMON = 'ADD_POKEMON';
const ADD_POKETYPES = 'ADD_POKETYPES';
const CHANGE_FILTER = 'CHANGE_FILTER';

const addPokemon = pokemon => ({
  type: ADD_POKEMON,
  pokemon,
});

const addPokemonType = pokeTypes => ({
  type: ADD_POKETYPES,
  pokeTypes,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export { addPokemon, addPokemonType, changeFilter };
