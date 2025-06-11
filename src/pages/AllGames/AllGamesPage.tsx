import CommentIcon from "@/assets/img/comment_icon.png";
import StarIcon from "@/assets/img/rate_star_icon.png";
import UpIcon from "@/assets/img/up_icon.png";
import { Checkbox } from "@/components/ui/checkbox";
import { useGames } from "@/hooks/useGames";
import type { Game } from "@/hooks/useGames";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import * as Slider from "@radix-ui/react-slider";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useGenres } from "@/hooks/useGenres";
import { Button } from "@/components/ui/button";

function AllGamesPage() {
  const [rating, setRating] = useState([0, 100]);
  const [multiplayerChecked, setMultiplayerChecked] = useState(false);
  const [singleplayerChecked, setSingleplayerChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [filters, setFilters] = useState<{
    genres: string[];
    tags: string[];
    metacritic: string | undefined;
  }>({
    genres: [],
    tags: [],
    metacritic: undefined,
  });

  const { games, loading, error, totalPages } = useGames({
    currentPage,
    genres: filters.genres,
    tags: filters.tags,
    metacritic: filters.metacritic,
  });

  const { genres } = useGenres();

  const handleGenreClick = (genreSlug: string) => {
    setSelectedGenres((prev) => {
      if (prev.includes(genreSlug)) {
        return prev.filter((slug) => slug !== genreSlug);
      }
      return [...prev, genreSlug];
    });
  };

  const handleMultiplayerChange = (checked: boolean) => {
    setMultiplayerChecked(checked);
  };

  const handleSingleplayerChange = (checked: boolean) => {
    setSingleplayerChecked(checked);
  };

  const handleFilter = () => {
    const tags: string[] = [];
    if (multiplayerChecked) tags.push("multiplayer");
    if (singleplayerChecked) tags.push("singleplayer");

    setFilters({
      genres: selectedGenres,
      tags,
      metacritic:
        rating[0] > 0 || rating[1] < 100
          ? `${rating[0]},${rating[1]}`
          : undefined,
    });
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-row w-full min-h-screen gap-8">
      {/* Filters */}
      <div className="w-[300px] mt-4">
        <p className="text-white/50 mb-4">Tags</p>
        <button className="flex flex-row items-center gap-2 mb-4 bg-white/5 rounded-xl p-4 w-full">
          <Checkbox
            checked={multiplayerChecked}
            onCheckedChange={(checked) =>
              handleMultiplayerChange(checked as boolean)
            }
          />
          <p className="text-white">Çok Oyunculu</p>
        </button>
        <button className="flex flex-row items-center gap-2 bg-white/5 rounded-xl p-4 w-full">
          <Checkbox
            checked={singleplayerChecked}
            onCheckedChange={(checked) =>
              handleSingleplayerChange(checked as boolean)
            }
          />
          <p className="text-white">Tek Oyunculu</p>
        </button>

        <p className="text-white/50 mb-4 mt-10">Metacritic</p>
        <div className="bg-white/5 rounded-xl px-4 py-8 w-full">
          <div className="flex justify-between mb-2">
            <span className="text-white text-sm">{rating[0]}</span>
            <span className="text-white text-sm">{rating[1]}</span>
          </div>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={rating}
            onValueChange={setRating}
            min={1}
            max={100}
            step={1}
          >
            <Slider.Track className="bg-white/10 relative grow rounded-full h-1">
              <Slider.Range className="absolute bg-[#342489] rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-4 h-4 bg-[#342489] rounded-full hover:bg-[#342489]/80 focus:outline-none focus:ring-2 focus:ring-[#342489]/50"
              aria-label="Min Rating"
            />
            <Slider.Thumb
              className="block w-4 h-4 bg-[#342489] rounded-full hover:bg-[#342489]/80 focus:outline-none focus:ring-2 focus:ring-[#342489]/50"
              aria-label="Max Rating"
            />
          </Slider.Root>
        </div>

        {/* <p className="text-white/50 mb-4 mt-10">Tarih</p>
        <div className="bg-white/5 flex flex-row items-center gap-2 rounded-xl px-4 py-8 w-full">
          <input className="w-full bg-white/5 rounded-xl p-2 text-white" />
          <input className="w-full bg-white/5 rounded-xl p-2 text-white" />
        </div> */}

        <p className="text-white/50 mb-4 mt-10">Genres</p>
        <div className="grid grid-cols-2 gap-2">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => handleGenreClick(genre.slug)}
              className={`rounded-[20px] py-2 text-white text-sm transition-colors text-center ${
                selectedGenres.includes(genre.slug)
                  ? "border-[#342489] border hover:border-[#342489]/90"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {genre.name}
            </button>
          ))}
        </div>
        <Button
          className="w-full mt-4 bg-[#342489] hover:bg-[#342489]/90 text-white"
          onClick={handleFilter}
        >
          Filtrele
        </Button>
      </div>
      <div className="flex-1">
        <p className="text-white text-2xl font-bold mb-4">Tüm Oyunları</p>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 w-full">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="mt-8">
          <Pagination>
            <PaginationContent className="gap-1">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`${
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  } bg-white/5 hover:bg-white/10 text-white border-none`}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  if (totalPages <= 7) return true;
                  if (page === 1 || page === totalPages) return true;
                  if (page >= currentPage - 1 && page <= currentPage + 1)
                    return true;
                  return false;
                })
                .map((page, index, array) => {
                  if (index > 0 && array[index - 1] !== page - 1) {
                    return (
                      <PaginationItem key={`ellipsis-${page}`}>
                        <PaginationEllipsis className="text-white/50" />
                      </PaginationItem>
                    );
                  }
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className={`${
                          currentPage === page
                            ? "bg-[#342489] text-white hover:bg-[#342489]/90"
                            : "bg-white/5 text-white hover:bg-white/10"
                        } border-none`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`${
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  } bg-white/5 hover:bg-white/10 text-white border-none`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

function GameCard({ game }: { game: Game }) {
  return (
    <div className="flex flex-row gap-2 bg-white/5 rounded-xl p-4 relative w-full">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-20 h-24 rounded-md object-cover"
      />
      <div className="flex flex-col">
        <p className="text-white text-lg font-bold">{game.name}</p>
        <p className="text-white/50 text-xs">
          {game.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="text-white/50 text-xs mb-4">{game.released}</p>

        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row items-center gap-1">
            <img src={StarIcon} alt="Star Icon" className="w-5 h-4" />
            <p className="text-white text-[10px]">{game.rating}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <img src={UpIcon} alt="Up Icon" className="w-5 h-4" />
            <p className="text-white text-[10px]">{game.metacritic}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <img src={CommentIcon} alt="Comment Icon" className="w-5 h-4" />
            <p className="text-white text-[10px]">{game.ratings_count}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bg-white/5 rounded-tl-xl w-8 h-8 flex items-center justify-center">
        <Plus color="white" size={20} />
      </div>
    </div>
  );
}

export default AllGamesPage;
