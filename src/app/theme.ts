import { createTheme, Theme } from "@mui/material";
import { getTokens } from "./tokens";

// Create theme function that accepts mode
export const createAppTheme = (mode: 'light' | 'dark'): Theme => {
  const tokens = getTokens(mode);
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: tokens.colors.primary[500],
        light: tokens.colors.primary[300],
        dark: tokens.colors.primary[700],
        contrastText: tokens.colors.text.inverse,
      },
      secondary: {
        main: tokens.colors.secondary[500],
        light: tokens.colors.secondary[300],
        dark: tokens.colors.secondary[700],
        contrastText: tokens.colors.text.inverse,
      },
      background: {
        default: tokens.colors.surface.background,
        paper: tokens.colors.surface.paper,
      },
      text: {
        primary: tokens.colors.text.primary,
        secondary: tokens.colors.text.secondary,
        disabled: tokens.colors.text.disabled,
      },
      divider: tokens.colors.border.default,
      success: {
        main: tokens.colors.semantic.success,
      },
      warning: {
        main: tokens.colors.semantic.warning,
      },
      error: {
        main: tokens.colors.semantic.error,
      },
      info: {
        main: tokens.colors.semantic.info,
      },
      grey: tokens.colors.neutral,
    },
    typography: {
      fontFamily: tokens.typography.fontFamily.primary,
      h1: {
        fontSize: tokens.typography.fontSize.xxl,
        fontWeight: tokens.typography.fontWeight.bold,
        lineHeight: tokens.typography.lineHeight.tight,
      },
      h2: {
        fontSize: tokens.typography.fontSize.xl,
        fontWeight: tokens.typography.fontWeight.bold,
        lineHeight: tokens.typography.lineHeight.tight,
      },
      h3: {
        fontSize: tokens.typography.fontSize.lg,
        fontWeight: tokens.typography.fontWeight.semibold,
        lineHeight: tokens.typography.lineHeight.tight,
      },
      body1: {
        fontSize: tokens.typography.fontSize.md,
        fontWeight: tokens.typography.fontWeight.regular,
        lineHeight: tokens.typography.lineHeight.normal,
      },
      body2: {
        fontSize: tokens.typography.fontSize.sm,
        fontWeight: tokens.typography.fontWeight.regular,
        lineHeight: tokens.typography.lineHeight.normal,
      },
      caption: {
        fontSize: tokens.typography.fontSize.xs,
        fontWeight: tokens.typography.fontWeight.regular,
        lineHeight: tokens.typography.lineHeight.normal,
      },
    },
    spacing: tokens.spacing.sm, // Base spacing unit (8px)
    shape: {
      borderRadius: tokens.borderRadius.sm,
    },
    shadows: [
      'none',
      tokens.shadows.sm,
      tokens.shadows.md,
      tokens.shadows.lg,
      tokens.shadows.xl,
      // Material-UI expects 25 shadow levels, but we'll use our custom ones for the first few
      ...Array(20).fill(tokens.shadows.xl),
    ] as any,
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: tokens.colors.surface.paper,
            color: tokens.colors.text.primary,
            borderBottom: `1px solid ${tokens.colors.border.default}`,
            boxShadow: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: tokens.borderRadius.sm,
            textTransform: 'none',
            fontWeight: tokens.typography.fontWeight.medium,
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: tokens.borderRadius.md,
            border: `1px solid ${tokens.colors.border.default}`,
          },
        },
      },
    },
  });
};

// Default theme (light mode)
const theme = createAppTheme('light');

export default theme;