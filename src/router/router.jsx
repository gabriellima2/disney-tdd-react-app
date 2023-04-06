import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "details/:id",
        element: <CharacterDetails />
      },
    ],
  },
]);
