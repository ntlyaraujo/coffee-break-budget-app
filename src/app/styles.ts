import { LinkButton } from "@/components";
import { Box, Chip, styled, Typography } from "@mui/material";

export const StyledHeroSection = styled(Box)(({ theme }) => ({
  height: "100vh",
  padding: theme.spacing(8, 0, 12, 0),
  textAlign: "center",
}));

export const StyledHeroChip = styled(Chip)(({ theme }) => ({
  fontSize: "0.875rem",
  padding: theme.spacing(2, 1),
  borderRadius: theme.shape.borderRadius,
}));

export const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3.5rem",
  fontWeight: 700,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  maxWidth: "800px",
}));

export const StyledHeroDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  fontWeight: 400,
  maxWidth: "600px",
  lineHeight: 1.6,
}));

export const StyledGradientLinkButton = styled(LinkButton)(({ theme }) => ({
  color: theme.palette.common.white,
  minWidth: 160,
  padding: theme.spacing(1.5, 0),
  fontSize: "1rem",
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  "&:hover": {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  },
}));

