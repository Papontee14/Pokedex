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
  const [count, setCount] = useState(0);

  const allPokemonUrl =
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=99999';
  const selectedElementPokemonUrl = `https://pokeapi.co/api/v2/type/${element}`;

  const getPokemons = async () => {
    setIsLoading(true);
    setError(null);
    if (element === 'all' || element === '') {
      try {
        const response = await axios.get(allPokemonUrl);
        setPokemons(response.data.results);
      } catch (error) {
        setError('Something went wrong!');
      }
      setIsLoading(false);
    } else {
      try {
        const response = await axios.get(selectedElementPokemonUrl);
        let pokemons = response.data.pokemon?.map((poke) => {
          return poke?.pokemon;
        });
        setPokemons(pokemons);
      } catch (error) {
        setError('Something went wrong!');
      }
      setIsLoading(false);
    }
  };

  const searchPokemon = (text) => {
    setSearchText(text);
    setElement('all');
  };

  const elementsFilter = (e) => {
    setElement(e);
  };

  const loadMore = () => {
    setCount((prev) => {
      return prev + 12;
    });
  };

  useEffect(() => {
    getPokemons();
    setCount(12);
  }, [element]);

  return (
    <React.Fragment>
      <Header />
      <Filter onSubmit={searchPokemon} />
      <ElementFilter onFilter={elementsFilter} />
      <PokemonList
        pokemons={pokemons}
        search={searchText}
        element={element}
        count={count}
        couter={loadMore}
      />
    </React.Fragment>
  );
}

export default App;
