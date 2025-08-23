"use client";

import React, { useState, useEffect } from "react";
import { Typography, MenuItem, Divider, ListItemIcon, ListItemText } from "@mui/material";
import { 
  CirclePlusIcon, 
  CoffeeIcon, 
  SettingsIcon, 
  TrendingUpIcon, 
  UserIcon, 
  LogOutIcon
} from "lucide-react";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { ThemeToggle } from "@/components/theme-toggle/ThemeToggle";
import { getCurrentUser, logout } from "./actions";
import {
  StyledAppBar,
  StyledToolbarContainer,
  StyledLogoSection,
  StyledNavigationSection,
  StyledUserSection,
  StyledUserButton,
  StyledUserAvatar,
  StyledUserMenu,
  StyledNavButton,
} from "./TopBar.styles";

const TopBar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleUserMenuClose();
    await logout();
  };

  const getUserInitials = (email: string) => {
    return email.split('@')[0].substring(0, 2).toUpperCase();
  };

  const getUserDisplayName = (email: string) => {
    return email.split('@')[0];
  };

  return (
    <StyledAppBar position="sticky">
      <StyledToolbarContainer>
        {/* Logo Section */}
        <Link href="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
          <StyledLogoSection>
            <CoffeeIcon size={28} />
            <Typography variant="h6" fontWeight={700} color="inherit">
              Coffee Break Budget
            </Typography>
          </StyledLogoSection>
        </Link>

        {/* Navigation Section */}
        <StyledNavigationSection>
          <Link href="/dashboard" style={{ textDecoration: "none" }}>
            <StyledNavButton>
              <TrendingUpIcon size={18} />
              Dashboard
            </StyledNavButton>
          </Link>
          <Link href="/expenses" style={{ textDecoration: "none" }}>
            <StyledNavButton>
              <CirclePlusIcon size={18} />
              Expenses
            </StyledNavButton>
          </Link>
          <Link href="/settings" style={{ textDecoration: "none" }}>
            <StyledNavButton>
              <SettingsIcon size={18} />
              Settings
            </StyledNavButton>
          </Link>
        </StyledNavigationSection>

        {/* User Section */}
        <StyledUserSection>
          <ThemeToggle size="small" showTooltip={false} />
          
          {user && (
            <>
              <StyledUserButton onClick={handleUserMenuOpen}>
                <StyledUserAvatar>
                  {getUserInitials(user.email || "")}
                </StyledUserAvatar>
              </StyledUserButton>

              <StyledUserMenu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleUserMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem disabled>
                  <ListItemIcon>
                    <UserIcon size={20} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2" fontWeight={600}>
                      {getUserDisplayName(user.email || "")}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {user.email}
                    </Typography>
                  </ListItemText>
                </MenuItem>
                
                <Divider />
                
                <MenuItem onClick={handleUserMenuClose}>
                  <ListItemIcon>
                    <UserIcon size={20} />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                
                <MenuItem onClick={handleUserMenuClose}>
                  <ListItemIcon>
                    <SettingsIcon size={20} />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </MenuItem>
                
                <Divider />
                
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <LogOutIcon size={20} />
                  </ListItemIcon>
                  <ListItemText>Sign Out</ListItemText>
                </MenuItem>
              </StyledUserMenu>
            </>
          )}
        </StyledUserSection>
      </StyledToolbarContainer>
    </StyledAppBar>
  );
};

export default TopBar;
