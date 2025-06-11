import logo from "@/assets/img/logo.png";
import NavbarItem from "./navbar/NavbarItem";

function Footer() {
  const GamesRoutes = [
    {
      path: "/all-games",
      name: "Tüm Oyunlar",
    },
    {
      path: "/best-100",
      name: "En iyi 100",
    },

    {
      path: "/most-popular",
      name: "En popüler",
    },
    {
      path: "/coming-soon",
      name: "Yakında Çıkacak",
    },
  ];

  const TestsRoutes = [
    {
      path: "/game-test",
      name: "Oyun Testi",
    },
    {
      path: "/character-test",
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
        <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-20 gap-8 md:gap-0">
          <img src={logo} alt="logo" className="w-36 h-9" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24">
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
