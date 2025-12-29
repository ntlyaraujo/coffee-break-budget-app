import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../app/__root";

/**
 * Index Route - The home page (/)
 *
 * Key concepts for CODE-BASED routing:
 * - Use createRoute() (not createFileRoute - that's for file-based routing)
 * - getParentRoute: () => rootRoute - defines the parent relationship
 * - path: "/" - this is the URL path for this route
 * - This component renders inside the <Outlet /> of __root.tsx
 */
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
