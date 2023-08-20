import React from 'react';

import Card from './Card';

const PokemonList = (props) => {
  return (
    <div className='grid grid-cols-12 gap-4 px-60 pt-6'>
      {props.pokemons
        ?.filter((pokemon) => {
          return (
            pokemon.name.includes(props.search) ||
            pokemon.url === `https://pokeapi.co/api/v2/pokemon/${props.search}/`
          );
        })
        .slice(0, props.amount)
        .map((result) => {
          return <Card pokemons={result.url} key={result.name} />;
        })}
    </div>
  );
};

export default PokemonList;
