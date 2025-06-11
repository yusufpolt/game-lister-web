import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllGames } from "../services/game-service";

interface Platform {
  id: number;
  slug: string;
  name: string;
}

interface PlatformRequirement {
  minimum?: string;
  recommended?: string;
}

interface PlatformInfo {
  platform: Platform;
  released_at: string;
  requirements: PlatformRequirement;
}

interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: EsrbRating;
  platforms: PlatformInfo[];
  genres: Genre[];
}

interface UseGamesReturn {
  games: Game[];
  loading: boolean;
  error: Error | null;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  totalPages: number;
}

interface UseGamesParams {
  currentPage?: number;
  pageSize?: number;
  genres?: string[];
  tags?: string[];
  metacritic?: number;
}

export const useGames = ({
  currentPage = 1,
  pageSize = 20,
  genres = [],
  tags = [],
  metacritic,
}: UseGamesParams = {}): UseGamesReturn => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["games", currentPage, genres, tags, metacritic],
    queryFn: ({ pageParam = currentPage }) => {
      const params = new URLSearchParams();
      params.append("page", pageParam.toString());
      params.append("page_size", pageSize.toString());

      if (genres.length > 0) {
        params.append("genres", genres.join(","));
      }

      if (tags.length > 0) {
        params.append("tags", tags.join(","));
      }

      if (metacritic) {
        params.append("metacritic", metacritic.toString());
      }

      return getAllGames(params);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const page = url.searchParams.get("page");
        return page ? parseInt(page) : undefined;
      }
      return undefined;
    },
    initialPageParam: currentPage,
    staleTime: 5 * 60 * 1000, // 5 dakika
    gcTime: 30 * 60 * 1000, // 30 dakika
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  const games = data?.pages.flatMap((page) => page.results) ?? [];
  const totalPages = data?.pages[0]?.count
    ? Math.ceil(data.pages[0].count / pageSize)
    : 1;

  return {
    games,
    loading: isLoading,
    error: error as Error | null,
    hasNextPage: !!hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    totalPages,
  };
};
