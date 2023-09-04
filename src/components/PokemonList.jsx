import React from 'react';

import Card from './Card';

const PokemonList = (props) => {
  return (
    <div className='grid grid-cols-12 gap-8 px-48 pt-6'>
      {props.pokemons
        ?.filter((pokemon) => {
          return (
            pokemon.name.includes(props.search) ||
            pokemon.url === `https://pokeapi.co/api/v2/pokemon/${props.search}/`
          );
        })
        .map((result) => {
          return <Card pokemons={result.url} element={props.element} key={result.name} />;
        })}
    </div>
  );
};

export default PokemonList;
