import CharacterOne from "@/assets/img/character_one.png";

import { ArrowRight } from "lucide-react";

function GameTestCard() {
  return (
    <div className="flex flex-row justify-between items-center h-[138px] w-[404px] relative bg-gradient-to-r from-amber-600 to-amber-300 py-4 px-8 rounded-[15px]">
      <img
        src={CharacterOne}
        alt="Character One"
        className="absolute top-[-26px] left-[-40px]"
      />

      <div className="flex flex-col gap-2 w-[70%] ml-10">
        <div className="flex flex-row gap-2 items-center rounded-[5px]">
          <div className="w-[5px] h-[16px] bg-white" />
          <p className="text-white text-xl font-bold">Oyun Karakteri Testi</p>
        </div>
        <p className="text-white/80">
          Testi çöz ve hangi oyun karakteri olduğunu bul!
        </p>
      </div>
      <ArrowRight size={24} width={24} height={24} className="text-white" />
    </div>
  );
}

export default GameTestCard;
