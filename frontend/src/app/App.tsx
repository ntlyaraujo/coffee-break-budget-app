import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { TopNavigation } from "../features";
import Providers from "./Providers";
import "./styles.css";

export const Route = createRootRoute({
  component: AppLayout,
});

function AppLayout() {
  return (
    <Providers>
      <TopNavigation />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </Providers>
  );
}
