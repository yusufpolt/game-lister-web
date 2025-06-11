import React from "react";
import GameDetail from "@/assets/img/game_detail.png";

function GameDetailsPage() {
  return (
    <div className="flex flex-col items-center">
      <img src={GameDetail} alt="Game Details" className="w-full h-full" />
    </div>
  );
}

export default GameDetailsPage;
