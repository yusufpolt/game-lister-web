import { useQuery } from "@tanstack/react-query";
import { getNewGamesComingSoon } from "@/services/game-service";

export const useNewGamesComingSoon = () => {
  return useQuery({
    queryKey: ["newGamesComingSoon"],
    queryFn: getNewGamesComingSoon,
  });
};
