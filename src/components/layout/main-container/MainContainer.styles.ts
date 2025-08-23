import { alpha, Box, styled } from "@mui/material";

export const StyledMainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.main,
    0.05
  )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
}));
