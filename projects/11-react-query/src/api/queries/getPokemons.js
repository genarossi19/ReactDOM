export const getPokemons = async ({ url = null, offset = 0, limit = 20 }) => {
    const urlToFetch = url ?? `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  
    try {
      const response = await fetch(urlToFetch);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Error in getPokemons:', error);
  
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        console.error('Network error. Please check your internet connection.');
      }
  
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };
  