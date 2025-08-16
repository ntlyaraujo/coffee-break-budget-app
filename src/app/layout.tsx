"use client";

import { Box } from "@mui/material";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ThemeToggle } from "@/components";
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
          {/* Fixed Theme Toggle */}
          <Box
            sx={{
              position: "fixed",
              top: 16,
              right: 16,
              zIndex: 9999,
              backgroundColor: "background.paper",
              borderRadius: "50%",
              boxShadow: (theme) => theme.shadows[4],
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: (theme) => theme.shadows[8],
                transform: "scale(1.05)",
              },
            }}
          >
            <ThemeToggle size="medium" showTooltip={true} />
          </Box>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
