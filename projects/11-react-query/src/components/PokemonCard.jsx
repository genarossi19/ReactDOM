import { useQuery } from "@tanstack/react-query";
import { PropTypes } from "prop-types";
import { getPokemonName } from "../api/queries/getPokemonName";

function PokemonCard({ pokemonName }) {
  const { data: pokemon } = useQuery({
    queryFn: () => getPokemonName(pokemonName),
    queryKey: ["pokemon", pokemonName],
  });

  return (
    pokemon && (
      // En este código, he agregado la clase md:flex-col al contenedor principal de los elementos h3 y p dentro del div para cambiar el diseño a columnas en dispositivos medianos (md) o más pequeños. Esto debería ayudar a evitar que los elementos se superpongan en pantallas más pequeñas. Puedes ajustar las clases según tus necesidades específicas.
      <article className="flex flex-col border border-slate-200 hover:shadow-lg transition-all ease-in-out duration-500 hover:shadow-slate-800 rounded-md p-5 max-w-full h-full justify-end hover:cursor-pointer hover:scale-105 bg-white overflow-hidden">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-full h-full object-cover"
        />
        <div className={`flex justify-between items-center ${"md:flex-col"}`}>
          <h3 className="text-3xl font-bold capitalize">{pokemon.name}</h3>
          <p className="text-xl font-light md:text-lg md:text-amber-400 md:mt-2">
            Pokedex: {pokemon.id}
          </p>
        </div>
        <div className="flex gap-2 mt-3">
          {pokemon.types.map((type) => {
            <p key={type.type.name}>{type.type.name}</p>;
          })}
        </div>
        <div className="flex gap-2 mt-3">
          <p className="me-2">
            <span className="text-lg">BaseXP: </span>
            <span className="font-light text-lg">{pokemon.base_experience}</span>
          </p>

          <p className="me-2">
            <span className="text-lg">Weight: </span>
            <span className="font-light text-lg">{pokemon.weight}</span>
          </p>

          <p className="me-2">
            <span className="text-lg">Height: </span>
            <span className="font-light text-lg">{pokemon.height}</span>
          </p>
        </div>
      </article>
    )
  );
}

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};

export default PokemonCard;
