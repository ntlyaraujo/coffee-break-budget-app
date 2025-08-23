"use client";

import { Box } from "@mui/material";
import { ThemeProvider } from "../contexts/ThemeContext";
import { MainContainer, ThemeToggle } from "@/components";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <MainContainer>
            {/* Fixed Theme Toggle */}
            
              <ThemeToggle size="medium" showTooltip={true} />
          
            {children}
          </MainContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
