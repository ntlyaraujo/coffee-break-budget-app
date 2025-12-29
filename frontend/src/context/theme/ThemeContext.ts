import { createContext } from "react";
import type { Theme } from "./Theme";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});
