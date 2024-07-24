import { Link, useParams } from "react-router-dom";
import { getPokemonById, getPokemonHabitat } from "../../services";
import { useEffect, useState } from "react";

import DetailPokemonCard from "../../components/detail-pokemon-card";
import Loading from "../../components/loading";

const DetailsPokemon = () => {
  const { id } = useParams();
  const offset = localStorage.getItem("offset");
  const [detailPokemon, setDetailPokemon] = useState<GetPokemonById>();
  const [spesiesPokemon, setSpesiesPokemon] =
    useState<ResponseSpeciesPokemon>();

  useEffect(() => {
    fetchDetail();
    fetchHabitat();
  }, [id]);

  const fetchDetail = async () => {
    try {
      const response = await getPokemonById(id as string);
      setDetailPokemon(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHabitat = async () => {
    try {
      const response = await getPokemonHabitat(id as string);
      setSpesiesPokemon(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col">
        {detailPokemon ? (
          <DetailPokemonCard
            key={id}
            id={id as string}
            name={detailPokemon.name}
            tagnumber={id as string}
            pokemontypes={detailPokemon.types}
            habitats={spesiesPokemon ? spesiesPokemon.habitat.name : "not identified"}
            weight={detailPokemon.weight}
            height={detailPokemon.height}
            abilities={detailPokemon.abilities}
          />
        ) : (
          <Loading />
        )}
        <div className="flex flex-row my-7 justify-around">
          <Link to={`/?offset=${offset}`} className="bg-blue-300 px-3 py-1 rounded-md">Back</Link>
          <Link to={`/catch-pokemon/${id}`} className="bg-orange-300 px-3 py-1 rounded-md">Go Catch</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPokemon;
