import { useQuery } from "@tanstack/react-query";
import { getPublisher } from "@/services/game-service";

export const useGetPublisher = (id: number | undefined) => {
  return useQuery({
    queryKey: ["publisher", id],
    queryFn: () => getPublisher(id!),
    enabled: !!id,
    gcTime: 0,
    staleTime: 0,
  });
}; 