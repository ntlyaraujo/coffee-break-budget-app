import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../app/App";
import { Button } from "@heroui/react";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/expenses",
  component: ExpensesComponent,
});

function ExpensesComponent() {
  throw new Error("Test error");
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Expenses</h1>
      <p className="text-gray-600">
        Track your expenses and manage your budget effectively.
      </p>
      <Button
        onPress={() => {
          throw new Error("Test error");
        }}
      >
        Throw error
      </Button>
    </div>
  );
}
