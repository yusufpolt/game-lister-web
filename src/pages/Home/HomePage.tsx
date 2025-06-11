import CharacterOne from "@/assets/img/character_one.png";
import CharacterTwo from "@/assets/img/character_two.png";
import StreamerOne from "@/assets/img/streamer_one.png";
import StreamerTwo from "@/assets/img/streamer_two.png";
import StreamerThree from "@/assets/img/streamer_three.png";
import GameCard from "@/components/GameCard";
import { ImageCarousel } from "@/components/ImageCarousel";
import {
  carouselNews,
  mostPopularGames,
  newGamesComingSoon,
  popularGames,
} from "@/contants";
import { ArrowRight, Plus } from "lucide-react";
import ReisterBG from "@/assets/img/register_bg.png";
import RegisterPlusIcon from "@/assets/img/register_plus_icon.png";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import SectionThird from "@/assets/img/section_third.png";
import PopularityIcon from "@/assets/img/popularity_icon.png";
import StarIcon from "@/assets/img/rate_star_icon.png";
import UpIcon from "@/assets/img/up_icon.png";
import CommentIcon from "@/assets/img/comment_icon.png";
import SectionSeventh from "@/assets/img/section_seventh.png";

function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      {/* First Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 w-full">
        {/* Left Content */}
        <div className="col-span-1 lg:col-span-8">
          <ImageCarousel images={carouselNews} />
        </div>
        {/* Right Content */}
        <div className="col-span-1 lg:col-span-4 flex flex-col">
          <div className="flex flex-row justify-between items-end mb-4">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[4px] h-[16px] bg-[#5739F2]" />
              <p className="text-white text-lg md:text-xl font-bold">
                En Popüler Oyunlar
              </p>
            </div>
            <button className="text-white/50 text-xs">Hepsini Gör</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {mostPopularGames.map((game) => (
              <GameCard
                key={game.id}
                popularity={game.popularity}
                name={game.name}
                types={game.types}
                rate={game.rate}
                image={game.image}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="flex flex-col 2xl:flex-row mt-14 items-center">
        <div className="flex flex-col md:flex-row gap-10">
          <GameTestCardTwo />
          <GameTestCardOne />
        </div>
        <div className="w-[1px] h-[72px] bg-[#494949] mx-8 hidden 2xl:block" />
        <div className=" w-full h-[1px] bg-[#494949] my-8 2xl:hidden"></div>
        <div className="flex flex-col md:flex-row gap-4">
          <img src={StreamerOne} alt="StreamerOne" />
          <img src={StreamerTwo} alt="StreamerTwo" />
          <img src={StreamerThree} alt="StreamerThree" />
        </div>
      </div>
      {/* Section Third */}
      <div
        className="flex flex-col items-center justify-center mt-14 bg-cover bg-center bg-no-repeat h-[300px] rounded-[15px]"
        style={{ backgroundImage: `url(${ReisterBG})` }}
      >
        <img
          src={RegisterPlusIcon}
          alt="Register Plus Icon"
          className="w-20 h-20 mb-8"
        />
        <p className="text-white font-bold text-2xl mb-1">
          Oynama Listenize erişmek için oturum açın
        </p>
        <p className="text-white/70 text-xs">
          İzlemek istediklerinizi takip etmek için Oyun ve Karakterleri
          kaydedin.
        </p>
        <Button className="bg-white text-black rounded-3xl text-sm px-8 mt-8 hover:bg-white/80">
          {t("common.register")}
        </Button>
      </div>
      {/* Section Fourth */}
      <div className="flex flex-col mt-24 items-center justify-center">
        <button className="border-[#A034FF] border w-[162px] h-[36px] rounded-2xl text-white">
          Bilgi
        </button>
        <p className="text-white font-bold text-2xl mt-2">
          Game Lister Özellikleri
        </p>
        <p className="text-[#AAAAAA] text-xs mt-2 mb-10 whitespace-pre-line text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img src={SectionThird} alt="Section Third" />
      </div>
      {/* Section Fifth */}
      <div className="flex flex-col mt-24 items-center justify-center">
        <button className="border-[#A034FF] border w-[162px] h-[36px] rounded-2xl text-white">
          Yakında
        </button>
        <p className="text-white font-bold text-2xl mt-2">
          Yeni Çıkacak Oyunlar
        </p>
        <p className="text-[#AAAAAA] text-xs mt-2 whitespace-pre-line text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mt-14 w-full">
          {newGamesComingSoon.map((game) => (
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
      {/* Section Sixth */}
      <div className="flex flex-col mt-14 items-center justify-center">
        <button className="border-[#A034FF] border w-[162px] h-[36px] rounded-2xl text-white">
          Bilgi
        </button>
        <p className="text-white font-bold text-2xl mt-2">Popüler Oyunlar</p>
        <p className="text-[#AAAAAA] text-xs mt-2 whitespace-pre-line text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-14 w-full">
          {popularGames.map((game) => (
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
      {/* Section Seventh */}
      <img src={SectionSeventh} alt="Section Seventh" />
    </div>
  );
}

function GameTestCardTwo() {
  return (
    <div className="flex flex-row justify-between items-center h-[138px] w-[404px] relative bg-gradient-to-r from-amber-600 to-amber-300 py-4 px-8 rounded-[15px] hover:scale-105 transition-all duration-300 cursor-pointer">
      <img
        src={CharacterTwo}
        alt="Character One"
        className="absolute top-[-26px] left-[-60px]"
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

function GameTestCardOne() {
  return (
    <div className="flex flex-row justify-between items-center h-[138px] w-[404px] relative bg-gradient-to-r from-purple-600 to-purple-400 py-4 px-8 rounded-[15px] hover:scale-105 transition-all duration-300 cursor-pointer">
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

export default HomePage;
