import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../app/App";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Coffee Break Budget
      </h1>
      <p className="text-gray-600">
        Track your expenses and manage your budget effectively.
      </p>
    </div>
  );
}
