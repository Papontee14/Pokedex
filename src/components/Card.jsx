import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = props.pokemons;

  const getPokemons = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setPokemons(response.data);
    } catch (error) {
      setError('Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const Uppercase = (word) => {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  };
  return (
    <div className='col-span-3 bg-slate-100 p-3 rounded-lg'>
      <img src={pokemons.sprites?.other['official-artwork'].front_default} />
      <p>ID : {pokemons.id}</p>
      {Uppercase(pokemons.name)}
      <div className='flex gap-4'>
        {pokemons.types?.map((type) => {
          return <div key={type.slot}>{type.type.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Card;
