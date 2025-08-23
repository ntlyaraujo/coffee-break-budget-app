import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { getTokens } from "@/app/tokens";

export const StyledFormControl = styled(FormControl)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",

    padding: theme.spacing(2),
  };
});

export const StyledInput = styled(InputBase)(({ theme }) => {
  const tokens = getTokens(theme.palette.mode);

  return {
    borderRadius: tokens.borderRadius.sm,
    width: "100%",
    border: "1px solid",
    borderColor: tokens.colors.border.default,
    fontSize: tokens.typography.fontSize.md,
    fontWeight: tokens.typography.fontWeight.regular,
    padding: `${tokens.spacing.sm}px ${tokens.spacing.md}px`,
    backgroundColor: tokens.colors.surface.paper,
    color: tokens.colors.text.primary,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      borderColor: tokens.colors.border.hover,
    },

    "&.Mui-focused": {
      borderColor: tokens.colors.border.focus,
      backgroundColor: tokens.colors.surface.paper,
      outline: `2px solid ${tokens.colors.border.focus}20`,
      outlineOffset: -1,
    },
    "&.Mui-error": {
      borderColor: tokens.colors.border.error,
      "&.Mui-focused": {
        borderColor: tokens.colors.border.error,
        outline: `2px solid ${tokens.colors.border.error}20`,
      },
    },
    "&.Mui-disabled": {
      backgroundColor: tokens.colors.neutral[100],
      color: tokens.colors.text.disabled,
      borderColor: tokens.colors.neutral[200],
    },
  };
});

export const StyledInputLabel = styled(InputLabel)(({ theme }) => {
  const tokens = getTokens(theme.palette.mode);

  return {
    fontSize: tokens.typography.fontSize.lg,
    fontWeight: tokens.typography.fontWeight.medium,
    color: tokens.colors.text.primary,
  };
});

export const StyledHelperText = styled(FormHelperText, {
  shouldForwardProp: (prop: string) => prop !== "error",
})<{ error?: boolean }>(({ theme, error }) => {
  const tokens = getTokens(theme.palette.mode);

  return {
    fontSize: tokens.typography.fontSize.xs,
    margin: 0,
    marginTop: tokens.spacing.xs / 8,
    color: error ? tokens.colors.semantic.error : tokens.colors.text.secondary,
  };
});
