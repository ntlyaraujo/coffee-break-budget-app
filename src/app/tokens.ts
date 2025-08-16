// Design tokens for light and dark themes
export interface DesignTokens {
  colors: {
    primary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    neutral: {
      0: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
    semantic: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
    surface: {
      background: string;
      paper: string;
      elevated: string;
      overlay: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      inverse: string;
    };
    border: {
      default: string;
      hover: string;
      focus: string;
      error: string;
    };
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    none: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontFamily: {
      primary: string;
      mono: string;
    };
    fontSize: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    fontWeight: {
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
}

// Light theme tokens
export const lightTokens: DesignTokens = {
  colors: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#0f172a',
      600: '#1565c0',
      700: '#0d47a1',
      800: '#0a3d91',
      900: '#063282',
    },
    secondary: {
      50: '#fce4ec',
      100: '#f8bbd9',
      200: '#f48fb1',
      300: '#f06292',
      400: '#ec407a',
      500: '#dc004e',
      600: '#c2185b',
      700: '#ad1457',
      800: '#880e4f',
      900: '#560027',
    },
    neutral: {
      0: '#ffffff',
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      950: '#0a0a0a',
    },
    semantic: {
      success: '#4caf50',
      warning: '#ff9800',
      error: '#f44336',
      info: '#2196f3',
    },
    surface: {
      background: '#fafafa',
      paper: '#ffffff',
      elevated: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#666666',
      disabled: '#9e9e9e',
      inverse: '#ffffff',
    },
    border: {
      default: '#e0e0e0',
      hover: '#bdbdbd',
      focus: '#1976d2',
      error: '#f44336',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  },
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, Consolas, monospace',
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8,
    },
  },
};

// Dark theme tokens
export const darkTokens: DesignTokens = {
  colors: {
    primary: {
      50: '#0a3d91',
      100: '#0d47a1',
      200: '#1565c0',
      300: '#1976d2',
      400: '#42a5f5',
      500: '#64b5f6',
      600: '#90caf9',
      700: '#bbdefb',
      800: '#e3f2fd',
      900: '#f3f9ff',
    },
    secondary: {
      50: '#560027',
      100: '#880e4f',
      200: '#ad1457',
      300: '#c2185b',
      400: '#dc004e',
      500: '#ec407a',
      600: '#f06292',
      700: '#f48fb1',
      800: '#f8bbd9',
      900: '#fce4ec',
    },
    neutral: {
      0: '#000000',
      50: '#0a0a0a',
      100: '#1a1a1a',
      200: '#262626',
      300: '#333333',
      400: '#404040',
      500: '#525252',
      600: '#737373',
      700: '#a3a3a3',
      800: '#d4d4d4',
      900: '#f5f5f5',
      950: '#ffffff',
    },
    semantic: {
      success: '#66bb6a',
      warning: '#ffb74d',
      error: '#ef5350',
      info: '#42a5f5',
    },
    surface: {
      background: '#0a0a0a',
      paper: '#1a1a1a',
      elevated: '#262626',
      overlay: 'rgba(0, 0, 0, 0.8)',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#a3a3a3',
      disabled: '#525252',
      inverse: '#000000',
    },
    border: {
      default: '#333333',
      hover: '#525252',
      focus: '#90caf9',
      error: '#ef5350',
    },
  },
  spacing: lightTokens.spacing, // Same spacing for both themes
  borderRadius: lightTokens.borderRadius, // Same border radius for both themes
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.6)',
    md: '0 4px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.2)',
  },
  typography: lightTokens.typography, // Same typography for both themes
};

// Helper function to get tokens based on theme mode
export const getTokens = (mode: 'light' | 'dark'): DesignTokens => {
  return mode === 'light' ? lightTokens : darkTokens;
};
