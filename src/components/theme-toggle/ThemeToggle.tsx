'use client';

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ThemeToggleProps {
  size?: 'small' | 'medium' | 'large';
  showTooltip?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  size = 'medium', 
  showTooltip = true 
}) => {
  const { mode, toggleTheme } = useTheme();

  let iconSize = 22;
  if (size === 'small') {
    iconSize = 18;
  } else if (size === 'large') {
    iconSize = 28;
  }

  const button = (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      size={size}
      sx={{
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      {mode === 'light' ? (
        <Moon size={iconSize} />
      ) : (
        <Sun size={iconSize} />
      )}
    </IconButton>
  );

  if (!showTooltip) {
    return button;
  }

  return (
    <Tooltip 
      title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      placement="bottom"
    >
      {button}
    </Tooltip>
  );
};

export default ThemeToggle;
