import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

import { makeCharactersServices } from "../services/characters-services";

const characterService = makeCharactersServices();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home service={characterService} />,
  },
  {
    path: "details/:id",
    element: <Details service={characterService} />
  }
]);
