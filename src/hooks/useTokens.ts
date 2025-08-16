import { useTheme } from '@mui/material/styles';
import { getTokens, DesignTokens } from '../app/tokens';

/**
 * Custom hook to access design tokens based on current theme mode
 * @returns Design tokens for the current theme mode
 */
export const useTokens = (): DesignTokens => {
  const theme = useTheme();
  return getTokens(theme.palette.mode);
};

/**
 * Custom hook to access specific token categories
 * @returns Object with easy access to different token categories
 */
export const useTokenCategories = () => {
  const tokens = useTokens();
  
  return {
    colors: tokens.colors,
    spacing: tokens.spacing,
    typography: tokens.typography,
    borderRadius: tokens.borderRadius,
    shadows: tokens.shadows,
  };
};
