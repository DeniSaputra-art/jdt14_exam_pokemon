import { getBaseGifUrl } from "../utilities";

interface Props {
  id: string;
  name: string;
  tagnumber: string;
  pokemontypes: types[];
  habitats: string;
  weight: number;
  height: number;
  abilities: ability[];
}

interface types {
  slot: number;
  type: type2;
}

interface type2 {
  name: string;
  url: string;
}

interface ability {
  ability: ability2;
  is_hidden: boolean;
  slot: number;
}

interface ability2 {
  name: string;
  url: string;
}

const DetailPokemonCard = (props: Props) => {
  const {
    id,
    name,
    tagnumber,
    pokemontypes,
    habitats,
    weight,
    height,
    abilities,
  } = props;
  const imgUrl = getBaseGifUrl();
  return (
    <div className="flex flex-col bg-slate-300 max-w-fit p-4 rounded-md m-3">
      <div className="flex flex-row">
        <p className="font-semibold px-3">{name}</p>
        <p className="font-serif font-light">#0{tagnumber}</p>
      </div>
      <div className="flex flex-row">
        <img src={`${imgUrl}/${id}.gif`} className="p-5"/>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="font-semibold">Weight:</p>
              <p className="font-serif text-orange-400">{weight}</p>
            </div>
            <div className="flex flex-col px-4">
              <p className="font-semibold">Abilites:</p>
              {abilities ? (
                abilities.map((item: ability) => (
                  <p className="font-serif text-orange-400">
                    {item.ability.name}
                  </p>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="font-semibold">Height:</p>
              <p className="font-serif text-orange-400">{height}</p>
            </div>
            <div className="flex flex-col px-4">
              <p className="font-semibold">Types:</p>
              {pokemontypes ? (
                pokemontypes.map((item: types) => (
                  <p className="font-serif text-orange-400">{item.type.name}</p>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold">Habitat: </p>
      <p className="font-serif bg-green-600 w-fit px-1 rounded-sm">{habitats}</p>
    </div>
  );
};

export default DetailPokemonCard;
