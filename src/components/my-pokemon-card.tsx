import { Link } from "react-router-dom";
import { getBaseImgUrl } from "../utilities";

interface Props {
    id: string;
    name: string;
    weight: string;
    height: string;
}

const MyPokemonCard = (props: Props) => {
    const {id, name, weight, height} = props;
    const imgUrl = getBaseImgUrl();
  return (
    <Link to={`/detail/${id}`}>
      <div className="flex flex-col rounded-md bg-gray-100 shadow-md bg-opacity-70 w-max">
        <img src={`${imgUrl}/${id}.png`} className="p-3"/>
        <p className="text-start py-2 px-1">#0{id}</p>
        <p className="text-start font-semibold px-1">{name}</p>
        <div className="flex flex-row py-1">
          <p className="text-blue-400 px-1 font-mono ">weight:{weight}</p>
          <p className="text-red-300 px-1 font-mono">height:{height}</p>
        </div>
      </div>
    </Link>
  )
}

export default MyPokemonCard