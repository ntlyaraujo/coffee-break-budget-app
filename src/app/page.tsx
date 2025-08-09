"use client";
import { ThemeProvider } from "@mui/material";
import { TopBar } from "@/features";
import theme from "./theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
    </ThemeProvider>
  );
}

export default Home;