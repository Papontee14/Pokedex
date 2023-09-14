import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Card = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = props.pokemons;

  const navigate = useNavigate();

  const openCard = () => {
    navigate({
      pathname: `/PokemonDetail`,
      search: createSearchParams({
        url: url,
      }).toString(),
    });
  };

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
    const response = word?.charAt(0).toUpperCase() + word?.slice(1);
    return String(response);
  };
  return (
    <div
      className='col-span-12 sm:col-span-4 lg:col-span-3 rounded-xl shadow-lg active: transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200'
      key='pokemons.id'
      onClick={openCard}
    >
      <img
        src={pokemons.sprites?.other['official-artwork'].front_default}
        className=' bg-slate-100 rounded-t-xl'
      />
      <div className='p-3'>
        <p className='font-bold text-slate-700'>ID : {pokemons.id}</p>
        <div className='pt-1 font-medium text-xl'>
          {Uppercase(pokemons.name)}
        </div>
        <div className='grid grid-cols-12 gap-4 mt-2'>
          {pokemons.types?.map((type) => {
            return (
              <div key={type.slot} className='col-span-4'>
                <div
                  className={type.type.name + ' rounded-md flex justify-center'}
                >
                  {Uppercase(type.type.name)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
