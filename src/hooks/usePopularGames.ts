import { useQuery } from "@tanstack/react-query";
import { getPopularGames } from "@/services/game-service";

export const usePopularGames = () => {
  return useQuery({
    queryKey: ["popularGames"],
    queryFn: getPopularGames,
  });
}; 