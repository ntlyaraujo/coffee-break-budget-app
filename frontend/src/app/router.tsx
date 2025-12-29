import { createRouter } from "@tanstack/react-router";

// Import all route definitions
import { Route as rootRoute } from "./__root";
import { Route as indexRoute } from "../routes/index";
import { Route as aboutRoute } from "../routes/about";

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
