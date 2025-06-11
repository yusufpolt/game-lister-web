import { createBrowserRouter } from "react-router";
import {
  AllGamesPage,
  GameDetailsPage,
  GameTestPage,
  HomePage,
  LoginPage,
  MostPopularGamesPage,
  ProfilePage,
  RegisterPage,
  StreamerPage,
  Top100GamesPage,
  UpcomingGamesPage,
  YamaNotes,
} from "@/pages";
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
      {
        path: "/game-lister-web/top-100",
        element: <Top100GamesPage />,
      },
      {
        path: "/game-lister-web/most-popular",
        element: <MostPopularGamesPage />,
      },
      {
        path: "/game-lister-web/upcoming",
        element: <UpcomingGamesPage />,
      },
      {
        path: "/game-lister-web/yama-notes",
        element: <YamaNotes />,
      },
      {
        path: "/game-lister-web/profile",
        element: <ProfilePage />,
      },
      {
        path: "/game-lister-web/streamer",
        element: <StreamerPage />,
      },
      {
        path: "/game-lister-web/game-test",
        element: <GameTestPage />,
      },
      {
        path: "/game-lister-web/game-details",
        element: <GameDetailsPage />,
      },

      //   {
      //     path: "*",
      //     element: <ErrorPage />,
      //   },
    ],
  },
  {
    path: "/game-lister-web/login",
    element: <LoginPage />,
  },
  {
    path: "/game-lister-web/register",
    element: <RegisterPage />,
  },
]);
