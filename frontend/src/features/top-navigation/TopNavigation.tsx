import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import { Link } from "@tanstack/react-router";
import { SquarePlus, TrendingUp, Coffee } from "lucide-react";
import TopNavigationItem from "./components/TopNavigationItem";
import ThemeSwitch from "./components/ThemeSwitch";

const TopNavigation = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link to="/" className="font-bold flex items-end gap-2">
          <Coffee className="w-8 h-8" />
          Coffee Break Budget
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <TopNavigationItem
          to="/"
          icon={<TrendingUp className="w-4 h-4" />}
          title="Dashboard"
        />
        <TopNavigationItem
          to="/expenses"
          icon={<SquarePlus className="w-4 h-4" />}
          title="Expenses"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavigation;
