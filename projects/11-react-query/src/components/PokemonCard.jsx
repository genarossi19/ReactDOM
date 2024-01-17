import { PropTypes } from "prop-types";

function PokemonCard({ pokemonName='pokemon name' }) {
  return (
    <article className="flex flex-col border border-slate-200 hover:shadow-lg transition-all ease-in-out duration-500 hover:shadow-slate-800 rounded-md p-5 max-w-xs h-full justify-end hover:cursor-pointer hover:scale-105 bg-white ">
      <img src="" alt="pokemon" className="w-full h-full object-cover  " />
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold capitalize">{pokemonName}</h3>
        <p className="text-xl font-light ">Pokedex: Pokemon ID</p>
      </div>
      <div className="flex gap-2 mt-3">Badges</div>
      <div className="flex gap-2 mt-3">
        <p>
          <span className="text-lg ">BaseXP: </span>{" "}
          <span className="font-light text-lg ">267 </span>
        </p>

        <p>
          <span className="text-lg ">Weight: </span>{" "}
          <span className="font-light text-lg ">267kg </span>
        </p>

        <p>
          <span className="text-lg ">Height: </span>{" "}
          <span className="font-light text-lg ">267mts </span>
        </p>
      </div>
    </article>
  );
}
PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};
export default PokemonCard;
