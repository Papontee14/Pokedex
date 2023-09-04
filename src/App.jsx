import React, { useState, useEffect } from 'react';

import PokemonList from './components/PokemonList';
import Filter from './components/Filter';
import ElementFilter from './components/ElementFilter';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [element, setElement] = useState('');

  const getPokemons = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=99999`
      );
      setPokemons(response.data);
    } catch (error) {
      setError('Something went wrong!');
    }
    setIsLoading(false);
  };

  const SearchPokemon = (text) => {
    setSearchText(text);
  };

  const ElementsFilter = (e) => {
    setElement(e)
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Filter onSubmit={SearchPokemon} />
      <ElementFilter onFilter={ElementsFilter} />
      <PokemonList pokemons={pokemons.results} search={searchText} element={element} />
    </React.Fragment>
  );
}

export default App;
