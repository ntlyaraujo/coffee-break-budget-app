import { NavbarItem } from "@heroui/navbar";
import { Link } from "@tanstack/react-router";

type TopNavigationItemProps = {
  to: string;
  icon: React.ReactNode;
  title: string;
};

const TopNavigationItem = ({ to, icon, title }: TopNavigationItemProps) => {
  return (
    <NavbarItem>
      <Link
        to={to}
        className="flex items-center gap-2"
        activeProps={{
          className: "text-white bg-black rounded-md px-4 py-2",
        }}
      >
        {icon}
        {title}
      </Link>
    </NavbarItem>
  );
};

export default TopNavigationItem;
