
import PokemonCard from "./PokemonCard";

function PokemonList() {

 
  return (
    <>
      <h1 className="md:text-8xl text-5xl font-bol mb-6 ">Pokemons</h1>
      
   
      <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-3 w-full ">
        
       <PokemonCard/>
       

      </section>
    </>
  );
}

export default PokemonList;
