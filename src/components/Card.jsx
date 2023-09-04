import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const response = word?.charAt(0).toUpperCase() + word?.slice(1);
    return response;
  };
  return (
    <React.Fragment>
      {pokemons.types?.map((type) => {
        if (type.type.name === props.element) {
          return (
            <div className='col-span-3 rounded-xl shadow-lg' key={pokemons.id}>
              <Link to={`/PokemonDetail`}>
                <img
                  src={
                    pokemons.sprites?.other['official-artwork'].front_default
                  }
                  className=' bg-slate-100 rounded-t-xl'
                />
                <div className='p-3'>
                  <p className='font-bold text-slate-700'>ID : {pokemons.id}</p>
                  <p className='pt-1 font-medium text-xl'>
                    {Uppercase(pokemons.name)}
                  </p>
                  <div className='grid grid-cols-12 gap-4 mt-2'>
                    {pokemons.types?.map((type) => {
                      return (
                        <div key={type.slot} className='col-span-4'>
                          <div className={type.type.name + ' rounded-md'}>
                            {Uppercase(type.type.name)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </React.Fragment>
  );
};

export default Card;
