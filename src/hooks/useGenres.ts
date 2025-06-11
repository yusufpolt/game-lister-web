import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/game-service";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface GenreResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

interface UseGenresReturn {
  genres: Genre[];
  loading: boolean;
  error: Error | null;
}

export const useGenres = (): UseGenresReturn => {
  const { data, error, isLoading } = useQuery<GenreResponse>({
    queryKey: ["genres"],
    queryFn: () => getGenres(), // Tek seferde 100 kategori çekiyoruz
    staleTime: 5 * 60 * 1000, // 5 dakika
    gcTime: 30 * 60 * 1000, // 30 dakika
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  return {
    genres: data?.results ?? [],
    loading: isLoading,
    error: error as Error | null,
  };
};
