import Loading from "../../components/loading";
import MyPokemonCard from "../../components/my-pokemon-card";

const MyPokemon = () => {
  const response = localStorage.getItem("mypokemon");
  const listPokemon = JSON.parse(response as string) as PokemonCollection;

  return (
    <div className="flex flex-col">
      <label className="text-3xl text-center font-bold py-3 text-blue-500">
        Pokemon Collection
      </label>
      <div className="flex flex-row flex-wrap gap-5 justify-center py-5">
        {listPokemon ? listPokemon.pokemonList.map((item: MyPokemon, index: number) => (
            <MyPokemonCard key={index} id={item.id} name={item.name} weight={item.weight} height={item.height}/>
        )): <Loading/>}
      </div>
    </div>
  );
};

export default MyPokemon;
