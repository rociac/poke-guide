import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonList from '../PokemonList/PokemonList';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PokemonList} />
    <Route path="/pokemon/:id" component={PokemonDetails} />
  </Switch>
);

export default Routes;
