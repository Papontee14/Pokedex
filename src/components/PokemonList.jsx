import React, { useState } from 'react';

import Card from './Card';

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
      <div className='grid grid-cols-12 gap-8 px-48 py-6'>
        {pokemonList.length !== 0 ? pokemonList
          .map((result) => {
            return (
              <Card
                pokemons={result.url}
                element={props.element}
                key={result.name}
              />
            );
          })
          .slice(0, props.count) : <div>not found</div>}
      </div>
      <div className='flex justify-center mb-12'>
        {pokemonList.length > 12 ? (
          <button
            className='border-2 border-red-600 bg-red-600 text-white rounded-xl px-6 py-2 m-1 shadow-lg flex flex-row gap-3 items-center active:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-blue-500 duration-300'
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
