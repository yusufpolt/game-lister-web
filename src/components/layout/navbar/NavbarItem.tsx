import { Link } from "react-router";

interface NavbarItemProps {
  section: string;
  items: {
    path: string;
    name: string;
  }[];
}

const NavbarItem = ({ section, items }: NavbarItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <div className="w-[5px] h-[16px] bg-[#5739F2] rounded-[5px]" />
        <p className="text-white text-xl font-bold">{section}</p>
      </div>
      <div className="flex flex-col gap-2">
        {items &&
          items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white/40 text-normal cursor-pointer hover:text-white/80 transition-colors"
            >
              {item.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default NavbarItem;
