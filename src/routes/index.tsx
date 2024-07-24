import BackgourdImage from "../components/backgroud-image";
import CatchPokemon from "../features/catch";
import DetailsPokemon from "../features/details";
import Home from "../features/home";
import Layout from "../components/layout";
import MyPokemon from "../features/mypokemon";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <BackgourdImage />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/detail/:id",
            element: <DetailsPokemon />
          },
          {
            path: "/catch-pokemon/:id",
            element: <CatchPokemon />
          },
          {
            path: "/my-pokemon",
            element: <MyPokemon/>
          }
        ],
      },
    ],
  },
]);
