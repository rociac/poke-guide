import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonList from '../PokemonList/PokemonList';
import Pokemon from '../Pokemon/Pokemon';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PokemonList} />
      <Route path="/pokemon/:id" component={Pokemon} />
    </Switch>
  );
};

export default Routes;
