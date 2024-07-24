import { useEffect, useState } from "react";

import Loading from "../../components/loading";
import Pagination from "../../components/pagination";
import PokemonCard from "../../components/pokemon-card";
import { getListPokemon } from "../../services";
import { useQuery } from "../../hooks/useQuery";

const Home = () => {
  const [listPokemon, setListPokemon] = useState<PokemonList>();
  const query = useQuery();
  const page = ( query.get("offset") !== null ? query.get("offset") : 0 ) as number;

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const fetchPokemon = async () => {
    try {
      const response = await getListPokemon(page);
      setListPokemon(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="text-3xl text-center font-bold py-3 text-blue-500">
        Pokemon
      </label>
      {listPokemon ? <Pagination currentpage={page} total_pokemon={listPokemon.count}/> : <Loading/>}
      <div className="flex flex-row flex-wrap gap-5 justify-center py-5">
        {listPokemon ? (
          listPokemon.results.map((item: Result, index: number) => (
            <PokemonCard key={index} name={item.name} url={item.url} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
