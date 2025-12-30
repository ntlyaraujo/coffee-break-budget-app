import { HeroUIProvider } from "@heroui/react";
import ThemeProvider from "../context/theme/ThemeProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HeroUIProvider>
  );
};

export default AppProviders;
