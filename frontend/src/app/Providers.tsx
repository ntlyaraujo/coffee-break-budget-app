import { HeroUIProvider } from "@heroui/react";
import ThemeProvider from "../context/theme/ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HeroUIProvider>
  );
};

export default Providers;
