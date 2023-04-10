import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

import { makeCharactersServices } from "../services/characters-services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home service={makeCharactersServices()} />,
  },
  {
    path: "details/:id",
    element: <Details />
  }
]);
