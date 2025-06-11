import { createBrowserRouter } from "react-router";
import { AllGamesPage, HomePage } from "@/pages";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/all-games",
        element: <AllGamesPage />,
      },

      //   {
      //     path: "*",
      //     element: <ErrorPage />,
      //   },
    ],
  },
]);
