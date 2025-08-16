"use client";
import { Box, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import Link from "next/link";

const Home = () => {
  return (
   
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Link href="/auth/signup">Sign Up</Link>
        <Link href="/auth/signin">Sign In</Link>
      </Box>

  );
}

export default Home;