import React, { useState, useEffect, useCallback } from 'react';

import PokemonList from './components/PokemonList';
import Filter from './components/Filter';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [amount, setAmount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('')

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

  const Loadmore = () => {
    setAmount((amount) => amount + 12);
  };

  const SearchPokemon = (text) => {
    setSearchText(text)
    setAmount(12)
  };

  useEffect(() => {
    getPokemons();
  }, [amount]);

  return (
    <React.Fragment>
      <h1 className='text-3xl font-bold my-4'>Pokedex</h1>
      <Filter onSubmit={SearchPokemon} />
      <PokemonList pokemons={pokemons.results} amount={amount} search={searchText} />
      <div className='flex justify-center'>
        <button
          className='col-span-3 bg-slate-100 my-3 p-3 rounded-lg'
          onClick={Loadmore}
        >
          Load more
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
