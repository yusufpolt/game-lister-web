import PopularityIcon from "@/assets/img/popularity_icon.png";
import UpIcon from "@/assets/img/up_icon.png";
import type { Game } from "@/hooks/useGames";
import { useNavigate } from "react-router";

function GameCard({ game }: { game: Game }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game-lister-web/game-details/${game.id}`);
  };
  return (
    <div
      className="flex flex-row justify-between items-center px-4 py-2 bg-white/5 rounded-xl cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-row gap-2">
        <img
          src={game.background_image}
          alt="Game Image"
          className="w-20 h-24 rounded-md object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="text-white text-lg font-bold">{game.name}</p>
          <p className="text-white/50 text-sm">
            {game.genres.map((genre) => genre.name).join(", ")}
          </p>
          <div className="flex flex-row items-center gap-2">
            <img
              src={UpIcon}
              alt="Star Icon"
              className="w-4 h-4 object-contain"
            />
            <p className="text-white text-xs">{game.rating}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 justify-center relative">
        <img
          src={PopularityIcon}
          alt="Popularity Icon"
          className="w-10 h10 object-cover"
        />
        <p className="text-white text-base font-bold absolute">
          {game.metacritic}
        </p>
      </div>
    </div>
  );
}

export default GameCard;
