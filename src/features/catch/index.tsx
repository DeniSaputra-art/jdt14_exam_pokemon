import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import backgroundImage from "../../img/backgroud-catch.jpg";
import { getBaseGifUrl } from "../../utilities";
import { getPokemonById } from "../../services";

const CatchPokemon = () => {
  const { id } = useParams();
  const imgUrl = getBaseGifUrl();
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [showMessage, setShowMessage] = useState<Boolean>(false);
  const [luckNumber, setluckNumber] = useState<number>(0);
  const [detailPokemon, setDetailPokemon] = useState<GetPokemonById>();

  useEffect(() => {
    fetchDetail();
  }, [id]);

  const fetchDetail = async () => {
    try {
      const response = await getPokemonById(id as string);
      setDetailPokemon(response);
    } catch (error) {
      console.log(error);
    }
  };

  const catchPokemon = () => {
    const luckNumber = Math.random();
    setluckNumber(luckNumber);

    if (luckNumber >= 0.5) {
      setShowModal(true);
      setShowMessage(false);
    }
    if (luckNumber < 0.5) {
      setShowMessage(true)
    }
  };

  const savePokemon = () => {
    if (luckNumber >= 0.5) {
      const pokemon: MyPokemon = {
        id: id as string,
        name: detailPokemon?.name as string,
        weight: detailPokemon?.weight.toString() as string,
        height: detailPokemon?.height.toString() as string,
      };

      const pokemonCollection: PokemonCollection = {
        pokemonList: [pokemon],
      };

      const jsonPocemonCollection = JSON.stringify(pokemonCollection);
      localStorage.setItem("mypokemon", jsonPocemonCollection);
    }
    setShowModal(false);
  }

  const modalOff = () => {
    setShowModal(false)
  }
  
  return (
    <>
      <div className="flex flex-col">
        <div
          className="flex flex-row m-5 rounded-md h-96 justify-center p-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <img src={`${imgUrl}/${id}.gif`} className="max-w-60 max-h-60" />
        </div>
        <div className="flex flex-row justify-evenly">
          <Link
            to={`/detail/${id}`}
            className="bg-blue-300 px-3 py-1 rounded-md"
          >
            Back
          </Link>
          {showMessage ? <p className="text-red-500">not successful</p> : <></>}
          <button
            onClick={catchPokemon}
            className="bg-orange-300 px-3 py-1 rounded-md"
          >
            Catch
          </button>
        </div>
      </div>
      <>
        {showModal ? 
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-300 bg-opacity-40">
            <div className="flex flex-col bg-slate-300 w-fit p-4 rounded-md m-3">
              <p className="text-green-600">Congratulation you just caught</p>
              <img src={`${imgUrl}/${id}.gif`} className="p-5" />
              <div className="flex flex-row justify-evenly">
                <button onClick={modalOff} className="bg-orange-300 px-3 py-1 rounded-md">No</button>
                <button onClick={savePokemon} className="bg-blue-300 px-3 py-1 rounded-md">Save</button>
              </div>
            </div>
          </div>
         : 
          <></>
        }
      </>
    </>
  );
};

export default CatchPokemon;
