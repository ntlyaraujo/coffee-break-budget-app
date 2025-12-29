import { useCallback, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "./Theme";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as Theme);
      document.documentElement.classList.add(savedTheme as Theme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(theme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
