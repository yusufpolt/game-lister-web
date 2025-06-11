import COD6 from "@/assets/img/cod6.jpg";
import Fortnite from "@/assets/img/fortnite.jpg";
import GTA from "@/assets/img/gtav.jpg";
import News from "@/assets/img/news.png";
import PUBG from "@/assets/img/pubg.png";
import Valorant from "@/assets/img/valorant.png";
import LeagueOfLegends from "@/assets/img/lol.jpg";
import FC25 from "@/assets/img/fc25.jpg";

const carouselNews = [
  {
    id: 1,
    url: News,
    text: "VALORANT 10.07 Yama Notları",
    description:
      "Ajanlara ve oyun arayüzüne yönelik giderilen hatalar, konsol için yeni zaman çizelgesi görüntüleme seçeneği ve dahası.",
  },
  {
    id: 1,
    url: News,
    text: "VALORANT 10.07 Yama Notları",
    description:
      "Ajanlara ve oyun arayüzüne yönelik giderilen hatalar, konsol için yeni zaman çizelgesi görüntüleme seçeneği ve dahası.",
  },
  {
    id: 1,
    url: News,
    text: "VALORANT 10.07 Yama Notları",
    description:
      "Ajanlara ve oyun arayüzüne yönelik giderilen hatalar, konsol için yeni zaman çizelgesi görüntüleme seçeneği ve dahası.",
  },
];

const mostPopularGames = [
  {
    id: 1,
    popularity: 1,
    name: "Grand Theft Auto V",
    types: "Nişancı, Yarış, Macera",
    rate: "9.2",
    image: GTA,
  },
  {
    id: 2,
    popularity: 2,
    name: "Fortnite",
    types: "Nişancı, Yarış, Macera",
    rate: "9.2",
    image: Fortnite,
  },
  {
    id: 3,
    popularity: 3,
    name: "Call of Duty Black Ops 6",
    types: "Nişancı, Yarış, Macera",
    rate: "9.2",
    image: COD6,
  },
  {
    id: 4,
    popularity: 4,
    name: "PUBG Battlegrounds",
    types: "Nişancı, Yarış, Macera",
    rate: "9.2",
    image: PUBG,
  },
  // {
  //   id: 5,
  //   popularity: 5,
  //   name: "Valorant",
  //   types: "Nişancı, Yarış, Macera",
  //   rate: "9.2",
  //   image: Valorant,
  // },
];

const newGamesComingSoon = [
  {
    id: 1,
    name: "Grand Theft Auto V",
    types: "Nişancı, Yarış, Macera",
    image: GTA,
    info: "2018 | +18",
    releaseDate: "14 Mayıs 2018",
  },
  {
    id: 2,
    name: "Fortnite",
    types: "Nişancı, Yarış, Macera",
    image: Fortnite,
    info: "2018 | +18",
    releaseDate: "14 Mayıs 2018",
  },
  {
    id: 3,
    name: "Fortnite",
    types: "Nişancı, Yarış, Macera",
    image: Fortnite,
    info: "2018 | +18",
    releaseDate: "14 Mayıs 2018",
  },
  {
    id: 4,
    name: "League of Legends",
    types: "Nişancı, Yarış, Macera",
    image: LeagueOfLegends,
    info: "2018 | +18",
    releaseDate: "14 Mayıs 2018",
  },
  {
    id: 5,
    name: "League of Legends",
    types: "Nişancı, Yarış, Macera",
    image: LeagueOfLegends,
    info: "2018 | +18",
    releaseDate: "14 Mayıs 2018",
  },
  {
    id: 6,
    name: "Valorant",
    types: "Nişancı, Yarış, Macera",
    image: Valorant,
    info: "2018 | +18",
    releaseDate: "14 Mayıs 2018",
  },
];

const popularGames = [
  {
    id: 1,
    name: "Grand Theft Auto V",
    types: "Nişancı, Yarış, Macera",
    image: GTA,
    info: "2018 | +18",
    rate: "9.2",
  },
  {
    id: 2,
    name: "Fortnite",
    types: "Nişancı, Yarış, Macera",
    image: Fortnite,
    info: "2018 | +18",
    rate: "9.2",
  },
  {
    id: 3,
    name: "Valorant",
    types: "Nişancı, Yarış, Macera",
    image: Valorant,
    info: "2018 | +18",
    rate: "9.2",
  },
  {
    id: 4,
    name: "League of Legends",
    types: "Nişancı, Yarış, Macera",
    image: LeagueOfLegends,
    info: "2018 | +18",
    rate: "9.2",
  },
  {
    id: 5,
    name: "Call of Duty Black Ops 6",
    types: "Nişancı, Yarış, Macera",
    image: COD6,
    info: "2018 | +18",
    rate: "9.2",
  },
  {
    id: 6,
    name: "PUBG Battlegrounds",
    types: "Nişancı, Yarış, Macera",
    image: PUBG,
    info: "2018 | +18",
    rate: "9.2",
  },
  {
    id: 7,
    name: "Fifa 25",
    types: "Nişancı, Yarış, Macera",
    image: FC25,
    info: "2018 | +18",
    rate: "9.2",
  },
  {
    id: 8,
    name: "Grand Theft Auto V",
    types: "Nişancı, Yarış, Macera",
    image: GTA,
    info: "2018 | +18",
    rate: "9.2",
  },
  {
    id: 9,
    name: "Fortnite",
    types: "Nişancı, Yarış, Macera",
    image: Fortnite,
    info: "2018 | +18",
    rate: "9.2",
  },
];

const allGames = [
  {
    id: 1,
    name: "Grand Theft Auto V",
    types: "Nişancı, Yarış, Macera",
    image: GTA,
    info: "2018 | +18",
    rate: "9.2",
    isSingleplayer: true,
  },
  {
    id: 2,
    name: "Fortnite",
    types: "Nişancı, Yarış, Macera",
    image: Fortnite,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: false,
  },
  {
    id: 3,
    name: "Valorant",
    types: "Nişancı, Yarış, Macera",
    image: Valorant,
    info: "2018 | +18",
    rate: "9.2",
    isSingleplayer: false,
  },
  {
    id: 4,
    name: "League of Legends",
    types: "Nişancı, Yarış, Macera",
    image: LeagueOfLegends,
    info: "2018 | +18",
    rate: "9.2",
    isSingleplayer: false,
  },
  {
    id: 5,
    name: "Call of Duty Black Ops 6",
    types: "Nişancı, Yarış, Macera",
    image: COD6,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: true,
  },
  {
    id: 6,
    name: "PUBG Battlegrounds",
    types: "Nişancı, Yarış, Macera",
    image: PUBG,
    info: "2018 | +18",
    rate: "9.2",
    isSingleplayer: false,
  },
  {
    id: 7,
    name: "Fifa 25",
    types: "Nişancı, Yarış, Macera",
    image: FC25,
    info: "2018 | +18",
    rate: "9.2",
    isSingleplayer: true,
  },
  {
    id: 8,
    name: "Grand Theft Auto V",
    types: "Nişancı, Yarış, Macera",
    image: GTA,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: false,
  },
  {
    id: 9,
    name: "Fortnite",
    types: "Nişancı, Yarış, Macera",
    image: Fortnite,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: true,
  },
  {
    id: 1,
    name: "Grand Theft Auto V",
    types: "Nişancı, Yarış, Macera",
    image: GTA,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: true,
  },
  {
    id: 2,
    name: "Fortnite",
    types: "Nişancı, Yarış, Macera",
    image: Fortnite,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: false,
  },
  {
    id: 3,
    name: "Valorant",
    types: "Nişancı, Yarış, Macera",
    image: Valorant,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: false,
  },
  {
    id: 4,
    name: "League of Legends",
    types: "Nişancı, Yarış, Macera",
    image: LeagueOfLegends,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: false,
  },
  {
    id: 5,
    name: "Call of Duty Black Ops 6",
    types: "Nişancı, Yarış, Macera",
    image: COD6,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: true,
  },
  {
    id: 6,
    name: "PUBG Battlegrounds",
    types: "Nişancı, Yarış, Macera",
    image: PUBG,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: false,
  },
  {
    id: 7,
    name: "Fifa 25",
    types: "Nişancı, Yarış, Macera",
    image: FC25,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: true,
  },
  {
    id: 8,
    name: "Grand Theft Auto V",
    types: "Nişancı, Yarış, Macera",
    image: GTA,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: true,
  },
  {
    id: 9,
    name: "Fortnite",
    types: "Nişancı, Yarış, Macera",
    image: Fortnite,
    info: "2018 | +18",
    rate: "9.2",

    isSingleplayer: false,
  },
];

export {
  carouselNews,
  mostPopularGames,
  newGamesComingSoon,
  popularGames,
  allGames,
};
