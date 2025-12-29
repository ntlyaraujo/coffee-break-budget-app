import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./app/router";

/**
 * Application Entry Point
 *
 * Key concepts:
 * - RouterProvider is the top-level component that provides routing context
 * - It receives the router instance we created in router.tsx
 * - All route components will render inside RouterProvider
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
