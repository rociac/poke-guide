import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Routes from './components/Routes/Routes';
import Filter from './components/Filter/Filter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('https://pokeapi.co/api/v2/pokemon/?limit=151');
      const responseData = response.data.results;
      responseData.forEach(async pokemon => {
        const pokeUrl = pokemon.url;
        const data = await axios(pokeUrl);
        const poke = { name: data.data.name, id: data.data.id, img: data.data.sprites.front_default };
        dispatch({ type: 'ADD_POKEMON', pokemon: poke });
      });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Filter />
      <Routes />
    </div>
  );
}

export default App;
