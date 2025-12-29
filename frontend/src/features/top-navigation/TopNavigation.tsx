import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@tanstack/react-router";

/**
 * TopNavigation with TanStack Router Links
 *
 * Key concepts:
 * - Import Link from @tanstack/react-router
 * - Use `to` prop instead of `href` for type-safe routing
 * - The Link component automatically handles active states
 * - activeProps applies styles when the route is active
 */
const TopNavigation = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore - Route types are registered in router.tsx
          to="/"
          className="font-bold text-inherit"
        >
          Coffee Break Budget
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - Route types are registered in router.tsx
            to="/"
            className="text-foreground hover:text-primary transition-colors"
            activeProps={{ className: "text-primary font-semibold" }}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - Route types are registered in router.tsx
            to="/about"
            className="text-foreground hover:text-primary transition-colors"
            activeProps={{ className: "text-primary font-semibold" }}
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <span className="text-sm text-gray-500">Code-Based Routing Demo</span>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavigation;
