import axios from 'axios';

export const getPokemons = async (num) => {
  setIsLoading(true);
  setError(null);
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${num}`
    );
    setPokemons(response.data);
  } catch (error) {
    setError('Something went wrong!');
  }
  setIsLoading(false);
};
