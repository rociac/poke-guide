import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Routes from './components/Routes/Routes';
import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const responseTypes = await axios('https://pokeapi.co/api/v2/type');
      const pokeTypes = await responseTypes.data.results;
      pokeTypes.unshift({ name: 'All', url: null });
      pokeTypes.forEach(async pokeType => {
        dispatch({ type: 'ADD_POKETYPES', pokeTypes: pokeType });
      });
      const response = await axios(
        'https://pokeapi.co/api/v2/pokemon/?limit=151',
      );
      const responseData = response.data.results;
      responseData.forEach(async pokemon => {
        const types = [];
        const pokeUrl = pokemon.url;
        const data = await axios(pokeUrl);
        if (data.data.types[0].slot !== 1) {
          data.data.types.forEach(type => types.push(type.type.name));
        } else {
          types.push(data.data.types[0].type.name);
        }
        data.data.types = types;
        dispatch({ type: 'ADD_POKEMON', pokemon: data.data });
      });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className={styles.title} data-testid="title">Poke Guide</h1>
      <Routes />
    </div>
  );
}

export default App;
