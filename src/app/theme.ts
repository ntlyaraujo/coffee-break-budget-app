import { createTheme } from "@mui/material";

const theme = createTheme({
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