import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";

/**
 * About Route - Example of another top-level route (/about)
 *
 * Key concepts:
 * - Same pattern as index route
 * - getParentRoute defines which route this is a child of
 * - path: "/about" makes this accessible at /about
 */
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-600">
        Coffee Break Budget helps you track daily expenses and stay on top of
        your finances.
      </p>
    </div>
  );
}
