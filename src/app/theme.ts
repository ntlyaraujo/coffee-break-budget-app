import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // or any color you prefer
    },
    secondary: {
      main: "#dc004e", // Custom secondary color
    },
    common: {
      black: "#2c3e50", // Custom dark color instead of pure black
      white: "#ffffff",
    },
    // Custom colors
    text: {
      primary: "#2c3e50", // Override default text color
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#000",
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;