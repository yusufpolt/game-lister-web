import type { Game } from "@/hooks/useGames";
import type { Genre } from "@/hooks/useGenres";
import api from "../../lib/axios";

interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface GamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

interface GenreResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

export const getAllGames = async (
  params: URLSearchParams
): Promise<GamesResponse> => {
  const { data } = await api.get<GamesResponse>("/games", {
    params: Object.fromEntries(params.entries()),
  });

  // API'den gelen metacritic değerini number'a dönüştür
  const transformedResults = data.results.map((game) => ({
    ...game,
    metacritic: game.metacritic ? Number(game.metacritic) : undefined,
  }));

  return {
    ...data,
    results: transformedResults,
  };
};

export const getGenres = async (): Promise<GenreResponse> => {
  const { data } = await api.get<GenreResponse>("/genres", {
    params: {
      page_size: 100,
    },
  });

  return data;
};

export const getMostPopularGames = async (): Promise<GamesResponse> => {
  const { data } = await api.get<GamesResponse>("/games", {
    params: {
      page: 1,
      page_size: 5,
    },
  });

  return data;
};

export const getNewGamesComingSoon = async (): Promise<GamesResponse> => {
  const { data } = await api.get<GamesResponse>("/games", {
    params: {
      page: 1,
      page_size: 5,
      dates: "2025-06-12,2026-06-12",
      ordering: "-released",
    },
  });

  return data;
};

export const getPopularGames = async (): Promise<GamesResponse> => {
  const { data } = await api.get<GamesResponse>("/games", {
    params: {
      page: 1,
      page_size: 10,
      ordering: "-added",
    },
  });

  return data;
};

export const getGameDetails = async (id: number) => {
  const { data } = await api.get(`/games/${id}`);
  return data;
};

export const getPublisher = async (id: number): Promise<Publisher> => {
  const { data } = await api.get<Publisher>(`/publishers/${id}`);
  return data;
};
