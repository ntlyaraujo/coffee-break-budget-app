import { createRouter } from "@tanstack/react-router";

import { Route as rootRoute } from "./App";
import { Route as indexRoute } from "../pages/index";
import { Route as expensesRoute } from "../pages/expenses";

const routeTree = rootRoute.addChildren([indexRoute, expensesRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
