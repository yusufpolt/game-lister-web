import PopularityIcon from "@/assets/img/popularity_icon.png";
import { Checkbox } from "@/components/ui/checkbox";
import { allGames } from "@/contants";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

function UpcomingGamesPage() {
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
        <p className="text-white text-2xl font-bold mb-4">
          Yakında Çıkacak Oyunlar
        </p>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 w-full">
          {filteredGames.map((game) => (
            <NewGamesComingSoonCard
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

function NewGamesComingSoonCard({
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
    <div className="flex flex-row items-center w-full p-4 justify-between bg-white/5 rounded-xl">
      <div className="flex flex-row gap-4">
        <img src={image} alt="Game Image" className="w-20 h-24 rounded-md" />
        <div className="flex flex-col gap-1">
          <p className="text-white text-lg font-bold">{name}</p>
          <p className="text-white/50 text-xs">{types}</p>
          <p className="text-white/50 text-xs">{info}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 justify-center relative">
        <img src={PopularityIcon} alt="Popularity Icon" className="w-20 h-20" />
        <div className="flex flex-col items-end justify-center absolute">
          <p className="text-white text-base font-bold">14</p>
          <p className="text-white/50 text-sm">Mayıs</p>
          <p className="text-white/20 text-xs">2024</p>
        </div>
      </div>
    </div>
  );
}

export default UpcomingGamesPage;
