import { useInfiniteQuery } from "@tanstack/react-query";

import PokemonCard from "./PokemonCard";
import { getPokemons } from "../api/queries/getPokemons";

function PokemonList() {
  const { data } = useInfiniteQuery({
    getNextPageParam: (lastPage) => lastPage.next,
    queryFn: ({ pageParam }) => getPokemons({ url: pageParam }),
    queryKey: ["pokemons"],
  });

  console.log(data);
  console.log(data?.pages);
  console.log(data?.pages?.[0]?.results);

  return (
    <>
      <h1 className="md:text-8xl text-5xl font-bol mb-6 ">Pokemons</h1>
      <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-3 w-full ">
        {data &&
          data.pages.map((page) => {
            return page.results.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
            ));
          })}
      </section>
    </>
  );
}

export default PokemonList;
