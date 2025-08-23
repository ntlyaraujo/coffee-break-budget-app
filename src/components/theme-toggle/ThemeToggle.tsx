"use client";

import React from "react";
import { Tooltip } from "@mui/material";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import {
  StyledThemeToggleButton,
  StyledThemeToggleContainer,
} from "./ThemeToggle.styles";

interface ThemeToggleProps {
  size?: "small" | "medium" | "large";
  showTooltip?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = "medium",
  showTooltip = true,
}) => {
  const { mode, toggleTheme } = useTheme();

  let iconSize = 22;
  if (size === "small") {
    iconSize = 18;
  } else if (size === "large") {
    iconSize = 28;
  }

  const button = (
    <StyledThemeToggleButton
      onClick={toggleTheme}
      color="inherit"
      size={size}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      {mode === "light" ? <Moon size={iconSize} /> : <Sun size={iconSize} />}
    </StyledThemeToggleButton>
  );

  if (!showTooltip) {
    return button;
  }

  return (
    <StyledThemeToggleContainer>
      <Tooltip
        title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        placement="bottom"
      >
        {button}
      </Tooltip>
    </StyledThemeToggleContainer>
  );
};

export default ThemeToggle;
