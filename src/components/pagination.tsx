import { useNavigate } from "react-router-dom";

interface Props {
  currentpage: number;
  total_pokemon: number;
}

const Pagination = (props: Props) => {
  const { currentpage, total_pokemon } = props;
  const navigate = useNavigate();

  const handlePreviousPage = () => {
    const numPage = Number(currentpage);
    if (numPage >= 20) {
      const offset = numPage - 20;
      localStorage.setItem("offset", offset.toString())
      navigate(`?offset=${offset}`);
    }
  };

  const handleNextPage = () => {
    const numPage = Number(currentpage);
    const offset = numPage + 20;
    localStorage.setItem("offset", offset.toString())
    navigate(`?offset=${offset}`);
  };

  return (
    <div className="flex justify-center px-5 h-8">
      <button
        onClick={handlePreviousPage}
        className="px-4 bg-blue-500 rounded"
      >
        Prev
      </button>
      <span className="py-1 mx-5">
        {currentpage > 20 ? currentpage / 20 : 1} /{" "}
        {Math.round(total_pokemon / 20)}
      </span>
      <button
        onClick={handleNextPage}
        className="px-4 bg-blue-500 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
