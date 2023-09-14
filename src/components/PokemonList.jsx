import React, { useState } from 'react';

import { Alert } from 'flowbite-react';

import Card from './Card';
import alert from '../asset/alert.png'

const PokemonList = (props) => {
  const [count, setCount] = useState(0);

  const pokemonList = props.pokemons?.filter((pokemon) => {
    return (
      pokemon.name.includes(props.search) ||
      pokemon.url === `https://pokeapi.co/api/v2/pokemon/${props.search}/`
    );
  });

  const loadMore = () => {
    return props.couter();
  };

  const checkAmount = () => {
    return () => setCount(count + 1);
  };

  return (
    <React.Fragment>
      <div className='grid grid-cols-12 gap-8 py-6 px-3 sm:px-12 lg:px-48'>
        {pokemonList.length !== 0 ? (
          pokemonList
            .map((result) => {
              return (
                <Card
                  pokemons={result.url}
                  element={props.element}
                  key={result.name}
                />
              );
            })
            .slice(0, props.count)
        ) : (
          <div className='col-span-12'>
            <Alert color='failure'>
              <div className='flex gap-4'>
              <img src={alert} className='w-8 h-8' />
              <span className='text-xl'>No Pokemon match on your search !</span>
              </div>
            </Alert>
          </div>
        )}
      </div>
      <div className='flex justify-center mb-12'>
        {pokemonList.length > 12 ? (
          <button
            className='border-2 border-gray-800 bg-gray-800 text-white rounded-xl px-6 py-2 mt-8 shadow-lg flex flex-row gap-3 items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'
            onClick={loadMore}
          >
            Load more
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
