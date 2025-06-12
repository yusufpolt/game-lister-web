import background from "@/assets/img/background.png";
import logo from "@/assets/img/logo.png";
import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { LanguageToggle } from "../LanguageToggle";
import NavbarItem from "./navbar/NavbarItem";

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

const GamesCategoriesRoutes = [
  {
    path: "/action-games",
    name: "Aksiyon oyunları",
  },
  {
    path: "/adventure-games",
    name: "Macera oyunları",
  },
  {
    path: "/fighting-games",
    name: "Dövüş oyunları",
  },
  {
    path: "/platform-games",
    name: "Platform oyunları",
  },
  {
    path: "/puzzle-games",
    name: "Bulmaca oyunları",
  },
  {
    path: "/simulation-games",
    name: "Simülasyon oyunları",
  },
  {
    path: "/rpg-games",
    name: "Rol Yapma oyunları",
  },
  {
    path: "/sports-games",
    name: "Spor oyunları",
  },
  {
    path: "/strategy-games",
    name: "Strateji oyunları",
  },
  {
    path: "/logic-games",
    name: "Mantıksal Oyunlar",
  },
  {
    path: "/online-games",
    name: "Çevrimiçi Oyunlar",
  },
  {
    path: "/math-games",
    name: "Matematik oyunları",
  },
  {
    path: "/educational-games",
    name: "Eğitsel Oyunlar",
  },
];

const GamesRewardsRoutes = [
  {
    path: "/game-awards",
    name: "Game Awards",
  },
  {
    path: "/game-lister-awards",
    name: "Game Lister Awards",
  },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`border-b border-white/10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/25 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 max-md:px-6">
        {/* Logo */}
        <Link to="/game-lister-web/">
          <img src={logo} alt="logo" className="w-36 h-9" />
        </Link>
        {/* Search */}
        <SearchInput />
        {/* Mobile Menu */}
        <div className="flex flex-row items-center gap-4">
          <MobileMenu />
          <MenuComponent />
          <Link to="/game-lister-web/register">
            <Button className="bg-[#5739F2] px-8 rounded-4xl py-4 hover:bg-[#5739F2]/80 cursor-pointer max-md:hidden">
              {t("common.register")}
            </Button>
          </Link>
          <Link to="/game-lister-web/login">
            <Button
              variant="outline"
              className="border-[#5739F2] max-md:hidden px-8 py-4 bg-transparent text-white rounded-4xl hover:bg-transparent hover:text-white cursor-pointer"
            >
              {t("common.login")}
            </Button>
          </Link>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

const NavCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Link to={"/game-lister-web/game-test"}>
      <div className="flex flex-col gap-2 p-4 w-[373px] h-[138px] bg-[#5739F2] rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300">
        <p className="text-white text-xl font-bold">{title}</p>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-white/60 whitespace-pre-line">{description}</p>
          <ArrowRight size={24} width={24} height={24} className="text-white" />
        </div>
      </div>
    </Link>
  );
};

const MenuComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="max-md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex flex-row items-center gap-2 cursor-pointer ring-0 border-none focus:ring-0 focus:outline-none">
          <Menu size={24} className="text-[#5739F2]" />
          <p className="text-white text-base max-md:hidden font-semibold">
            {t("common.menu")}
          </p>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-screen mt-6 border-0 bg-[#090909]/95 rounded-none pt-28 pb-32 "
        >
          <div className="flex flex-col gap-4 container mx-auto">
            <div className="flex flex-row justify-between">
              <NavbarItem section="Kategoriler" items={GamesCategoriesRoutes} />
              <div className="w-[1px] h-[400px] bg-white/10 mx-8" />
              <div className="flex flex-col gap-10">
                <NavbarItem section="Oyunlar" items={GamesRoutes} />
                <NavbarItem section="Ödüller" items={GamesRewardsRoutes} />
              </div>
              <div className="w-[1px] h-[400px] bg-white/10 mx-8" />
              <div className="flex flex-col gap-10">
                <NavCard
                  title="Oyun Testi"
                  description={`Oynayacak oyun bulamıyor musun? \n Testi çöz ve istediğin oyunu bul`}
                />
                <NavCard
                  title="Oyun Karakteri Testi"
                  description={`Testi çöz ve hangi oyun karakteri \n olduğunu bul!`}
                />
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const MobileMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="max-md:flex hidden">
      <Drawer direction="left">
        <DrawerTrigger className="flex flex-row items-center gap-2 cursor-pointer">
          <Menu size={24} className="text-[#5739F2]" />
          <p className="text-white text-base max-md:hidden font-semibold">
            {t("common.menu")}
          </p>
        </DrawerTrigger>
        <DrawerContent className="bg-transparent border-none">
          <div
            className="flex flex-col min-h-screen bg-[#090909] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="py-8 px-6">
              <img src={logo} alt="logo" className="w-36 h-9" />
              <div className="flex flex-col gap-4 mt-10 overflow-y-auto max-h-[calc(100vh-160px)]">
                <NavbarItem
                  section="Kategoriler"
                  items={GamesCategoriesRoutes}
                />
                <NavbarItem section="Oyunlar" items={GamesRoutes} />
                <NavbarItem section="Ödüller" items={GamesRewardsRoutes} />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
