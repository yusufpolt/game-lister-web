import CommentIcon from "@/assets/img/comment_icon.png";
import StarIcon from "@/assets/img/rate_star_icon.png";
import UpIcon from "@/assets/img/up_icon.png";
import { Checkbox } from "@/components/ui/checkbox";
import { allGames } from "@/contants";
import * as Slider from "@radix-ui/react-slider";
import { Plus } from "lucide-react";
import { useState } from "react";

function AllGamesPage() {
  const [rating, setRating] = useState([0]);
  const [multiplayerChecked, setMultiplayerChecked] = useState(false);
  const [singleplayerChecked, setSingleplayerChecked] = useState(false);

  const filteredGames = allGames.filter((game) => {
    if (!multiplayerChecked && !singleplayerChecked) return true;
    if (multiplayerChecked && !game.isSingleplayer) return true;
    if (singleplayerChecked && game.isSingleplayer) return true;
    return false;
  });

  return (
    <div className="flex flex-row w-full min-h-screen gap-8">
      {/* Filters */}
      <div className="w-[300px] mt-4">
        <p className="text-white/50 mb-4">Oyun</p>
        <button className="flex flex-row items-center gap-2 mb-4 bg-white/5 rounded-xl p-4 w-full">
          <Checkbox
            checked={multiplayerChecked}
            onCheckedChange={(checked) => {
              setMultiplayerChecked(checked as boolean);
              if (checked) setSingleplayerChecked(false);
            }}
          />
          <p className="text-white">Çok Oyunculu</p>
        </button>
        <button className="flex flex-row items-center gap-2 bg-white/5 rounded-xl p-4 w-full">
          <Checkbox
            checked={singleplayerChecked}
            onCheckedChange={(checked) => {
              setSingleplayerChecked(checked as boolean);
              if (checked) setMultiplayerChecked(false);
            }}
          />
          <p className="text-white">Tek Oyunculu</p>
        </button>

        <p className="text-white/50 mb-4 mt-10">Değerlendirme</p>
        <div className="bg-white/5 rounded-xl px-4 py-8 w-full">
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={rating}
            onValueChange={setRating}
            max={10}
            step={1}
          >
            <Slider.Track className="bg-white/10 relative grow rounded-full h-1">
              <Slider.Range className="absolute bg-[#342489] rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-4 h-4 bg-[#342489] rounded-full hover:bg-[#342489]/80 focus:outline-none focus:ring-2 focus:ring-[#342489]/50"
              aria-label="Rating"
            />
          </Slider.Root>
        </div>

        <p className="text-white/50 mb-4 mt-10">Tarih</p>
        <div className="bg-white/5 flex flex-row items-center gap-2 rounded-xl px-4 py-8 w-full">
          <input className="w-full bg-white/5 rounded-xl p-2 text-white" />
          <input className="w-full bg-white/5 rounded-xl p-2 text-white" />
        </div>

        <p className="text-white/50 mb-4 mt-10">Kategoriler</p>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Aksiyon
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Dövüş
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Platform
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Simülasyon
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Spor
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Mantıksal
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Matematik
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Yarış
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Macera
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Bulmaca
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Rol Yapma
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Strateji
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Çevrimiçi
          </button>
          <button className="bg-white/5 rounded-[20px] py-2 text-white text-sm hover:bg-white/10 transition-colors text-center">
            Eğitsel
          </button>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-white text-2xl font-bold mb-4">Tüm Oyunları</p>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 w-full">
          {filteredGames.map((game) => (
            <PopularGamesCard
              key={game.id}
              name={game.name}
              types={game.types}
              image={game.image}
              info={game.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PopularGamesCard({
  name,
  types,
  image,
  info,
}: {
  name: string;
  types: string;
  image: string;
  info: string;
}) {
  return (
    <div className="flex flex-row gap-2 bg-white/5 rounded-xl p-4 relative w-full">
      <img src={image} alt="Game Image" className="w-20 h-24 rounded-md" />
      <div className="flex flex-col">
        <p className="text-white text-lg font-bold">{name}</p>
        <p className="text-white/50 text-xs">{types}</p>
        <p className="text-white/50 text-xs mb-4">{info}</p>

        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row items-center gap-1">
            <img src={StarIcon} alt="Star Icon" className="w-5 h-4 " />
            <p className="text-white text-[10px]">9.2</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <img src={UpIcon} alt="Star Icon" className="w-5 h-4 " />
            <p className="text-white text-[10px]">9.2</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <img src={CommentIcon} alt="Star Icon" className="w-5 h-4 " />
            <p className="text-white text-[10px]">9.2</p>
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
