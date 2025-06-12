import { useQuery } from "@tanstack/react-query";
import { getMostPopularGames } from "@/services/game-service";

export const useMostPopularGames = () => {
  return useQuery({
    queryKey: ["mostPopularGames"],
    queryFn: getMostPopularGames,
  });
};
