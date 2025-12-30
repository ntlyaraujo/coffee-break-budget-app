import { CatchBoundary, createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { TopNavigation } from "../features";
import Providers from "./AppProviders";
import "./styles.css";
import { ErrorFallback } from "../shared/error";

export const Route = createRootRoute({
  component: AppLayout,
});

function AppLayout() {
  return (
    <Providers>
      <TopNavigation />
      <main>
        <CatchBoundary
          getResetKey={() => "reset"}
          errorComponent={({ error }) => <ErrorFallback error={error} />}
        >
          <Outlet />
        </CatchBoundary>
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </Providers>
  );
}
