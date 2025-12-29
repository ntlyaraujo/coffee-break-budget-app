import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Providers from "./Providers";
import { TopNavigation } from "../features";
import "./styles.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
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
