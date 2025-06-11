import PopularityIcon from "@/assets/img/popularity_icon.png";
import StarIcon from "@/assets/img/rate_star_icon.png";

interface GameCardProps {
  popularity: number;
  name: string;
  types: string;
  rate: string;
  image: string;
}

function GameCard({ popularity, name, types, rate, image }: GameCardProps) {
  return (
    <div className="flex flex-row justify-between items-center px-4 py-2 bg-white/5 rounded-xl">
      <div className="flex flex-row gap-2">
        <img src={image} alt="Game Image" className="w-20 h-24 rounded-md" />
        <div className="flex flex-col gap-2">
          <p className="text-white text-lg font-bold">{name}</p>
          <p className="text-white/50 text-sm">{types}</p>
          <div className="flex flex-row items-center gap-2">
            <img src={StarIcon} alt="Star Icon" className="w-4 h-4" />
            <p className="text-white text-xs">{rate}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 justify-center relative">
        <img src={PopularityIcon} alt="Popularity Icon" className="w-10 h10" />
        <p className="text-white text-base font-bold absolute">{popularity}</p>
      </div>
    </div>
  );
}

export default GameCard;
