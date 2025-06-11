import { createBrowserRouter } from "react-router";
import { AllGamesPage, HomePage } from "@/pages";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/game-lister-web/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/game-lister-web/all-games",
        element: <AllGamesPage />,
      },

      //   {
      //     path: "*",
      //     element: <ErrorPage />,
      //   },
    ],
  },
]);
