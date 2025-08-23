import { Box, IconButton, styled } from "@mui/material";

export const StyledThemeToggleContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "50%",
  boxShadow: theme.shadows[2],
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[4],
    transform: "scale(1.05)",
  },
}));

export const StyledThemeToggleButton = styled(IconButton)(() => ({
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));
