import type { Game } from "@/hooks/useGames";
import api from "../../lib/axios";

interface GamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export const getAllGames = async (
  params: URLSearchParams
): Promise<GamesResponse> => {
  const { data } = await api.get<GamesResponse>("/games", {
    params: Object.fromEntries(params.entries()),
  });

  return data;
};
