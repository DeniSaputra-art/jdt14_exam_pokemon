import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getBaseImgUrl } from "../utilities";
import { getPokemonByUrl } from "../services";

interface Props {
  url: string;
  name: string;
}

const PokemonCard = (props: Props) => {
  const { url, name} = props;
  const imgUrl = getBaseImgUrl();
  const [pokemon, setPokemon] = useState<GetPokemonById>();

  useEffect(() => {
    fetchPokemonById();
  });

  const fetchPokemonById = async () => {
    try {
      const response = await getPokemonByUrl(url as string);
      setPokemon(response);
    } catch (error) {
      console.log(error);
    }
  };    

  return (
    <Link to={`/detail/${pokemon?.id}`}>
      <div className="flex flex-col rounded-md bg-gray-100 shadow-md bg-opacity-70 w-max">
        <img src={`${imgUrl}/${pokemon?.id}.png`} className="p-3"/>
        <p className="text-start py-2 px-1">#0{pokemon?.id}</p>
        <p className="text-start font-semibold px-1">{name}</p>
        <div className="flex flex-row py-1">
          <p className="text-blue-400 px-1 font-mono ">weight:{pokemon?.weight}</p>
          <p className="text-red-300 px-1 font-mono">height:{pokemon?.height}</p>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
