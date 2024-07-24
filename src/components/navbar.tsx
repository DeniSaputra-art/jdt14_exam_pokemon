import { Link } from "react-router-dom";
import logo from "../img/pokedexpnglogo.png";
import logo2 from "../img/pokedex_mini_logo.png";

const Navgation = () => {
  return (
    <div className="flex flex-row rounded-b-2xl bg-blue-500 justify-between mx-2 shadow-md">
      <img src={`${logo}`} width={120} className="mx-4" />
      <Link to={"/my-pokemon"}>
        <span className="flex flex-row m-4">
          <img src={`${logo2}`} className="size-10" />
          <p className="text-white px-2 py-2 font-semibold">My Pokemon</p>
        </span>
      </Link>
    </div>
  );
};

export default Navgation;
