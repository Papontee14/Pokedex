import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import axios from 'axios';
import { Progress } from 'flowbite-react';

import Header from './Header';
import back from '../asset/back.png';

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchparams] = useSearchParams();

  const getPokemon = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(searchparams.get('url'));
      setPokemon(response.data);
    } catch (error) {
      setError('Something went wrong!');
    }
    setIsLoading(false);
  };

  const Uppercase = (word) => {
    const response = word?.charAt(0).toUpperCase() + word?.slice(1);
    return String(response);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <div>
      <Header />
      <div className='flex justify-start items-center m-7 px-3 gap-4'>
        <Link to='/'>
          <div className='border-2 bg-sky-100 border-white rounded-xl p-3 flex flex-row gap-3 items-center active:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-blue-500 duration-300'>
            <img src={back} alt={back} className='w-8 h-8' />
          </div>
        </Link>
        <div className='flex justify-start items-end gap-4'>
          <span className='text-3xl lg:text-5xl'>
            {Uppercase(pokemon.name)}
          </span>
          <span className='text-2xl lg:text-4xl  text-gray-600'>
            ID : {pokemon.id}
          </span>
        </div>
      </div>
      <div className='bg-gray-800 rounded-xl sm:p-8 p-6 mx-8 mb-8'>
        <div className='bg-white sm:px-12 px-4 py-8 rounded-xl grid grid-cols-12'>
          <div className='lg:col-span-5 col-span-12'>
            <div className='flex justify-center'>
              <img
                src={pokemon.sprites?.other['official-artwork'].front_default}
              />
            </div>
          </div>
          <div className='lg:col-span-7 col-span-12'>
            <div className='text-2xl mb-4'>Type</div>
            <div className='grid grid-cols-12 gap-6'>
              {pokemon.types?.map((type) => {
                return (
                  <div key={type.slot} className='col-span-4'>
                    <div
                      className={
                        type.type.name +
                        ' text-lg rounded-md flex justify-center px-3 py-1'
                      }
                    >
                      {Uppercase(type.type.name)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='text-2xl my-4'>Status</div>
            <div className='bg-gray-300 py-6 sm:px-12 px-4 rounded-xl flex flex-col gap-2'>
              {pokemon.stats?.map((stat) => {
                return (
                  <div key={stat.stat.name}>
                    <span>{stat.stat.name}</span>
                    <Progress progress={(stat.base_stat * 100) / 220} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
