import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.text.primary}`,
  backgroundColor: "transparent",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "translateY(0px)",
  boxShadow: `0 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"
  }`,
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
    transform: "translateY(-2px)",
    boxShadow: `0 8px 16px ${
      theme.palette.mode === "dark"
        ? "rgba(0, 0, 0, 0.4)"
        : "rgba(0, 0, 0, 0.2)"
    }`,
  },
  "&:active": {
    transform: "translateY(0px)",
    boxShadow: `0 2px 4px ${
      theme.palette.mode === "dark"
        ? "rgba(0, 0, 0, 0.3)"
        : "rgba(0, 0, 0, 0.1)"
    }`,
    transition: "all 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
  },
}));
