import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Vite Configuration
 *
 * Note: We removed tanstackRouter() plugin because we're using
 * CODE-BASED routing (manual route tree definition).
 *
 * The plugin is only needed for FILE-BASED routing where routes
 * are auto-discovered from the file system.
 */
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
});
