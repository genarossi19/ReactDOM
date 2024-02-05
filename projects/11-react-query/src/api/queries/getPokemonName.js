export const getPokemonName = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
        throw new Error('No se encontro Pokemon');
    }

    return response.json(); // Añade esta línea para devolver los datos del Pokemon
};
