import logo from "@/assets/img/logo.png";
import NavbarItem from "./navbar/NavbarItem";
import { Link } from "react-router";

function Footer() {
  const GamesRoutes = [
    {
      path: "/game-lister-web/all-games",
      name: "Tüm Oyunlar",
    },
    {
      path: "/game-lister-web/top-100",
      name: "En iyi 100",
    },

    {
      path: "/game-lister-web/most-popular",
      name: "En popüler",
    },
    {
      path: "/game-lister-web/upcoming",
      name: "Yakında Çıkacak",
    },
  ];

  const TestsRoutes = [
    {
      path: "/game-lister-web/game-test",
      name: "Oyun Testi",
    },
    {
      path: "/game-lister-web/game-test",
      name: "Karakter Testi",
    },
  ];

  const AwardsRoutes = [
    {
      path: "/game-awards",
      name: "Game Awards",
    },
    {
      path: "/game-lister-awards",
      name: "Game Lister Awards",
    },
  ];

  return (
    <footer className="container mx-auto px-4">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-20 gap-8">
          <Link to="/game-lister-web/">
            <img src={logo} alt="logo" className="w-36 h-9" />
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <NavbarItem section="Oyunlar" items={GamesRoutes} />
            <NavbarItem section="Testler" items={TestsRoutes} />
            <NavbarItem section="Ödüller" items={AwardsRoutes} />
          </div>
        </div>
        <p className="text-[#B5B5B5] text-center mb-4 text-xs">
          © 2025 Game List. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
