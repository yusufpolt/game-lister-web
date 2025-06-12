import { useQuery } from "@tanstack/react-query";
import { getGameDetails } from "@/services/game-service";

export const useGetGameDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["gameDetails", id],
    queryFn: () => getGameDetails(Number(id)),
    enabled: !!id,
    gcTime: 0,
    staleTime: 0,
  });
}; 