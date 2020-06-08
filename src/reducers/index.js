import { combineReducers } from 'redux';
import pokemon from './pokemon';
import pokeTypes from './types';
import filter from './filter';

const rootReducer = combineReducers({ pokemon, pokeTypes, filter });

export default rootReducer;
