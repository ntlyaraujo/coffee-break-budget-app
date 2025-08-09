import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { CirclePlusIcon, CoffeeIcon, SettingsIcon, TrendingUpIcon } from "lucide-react";
import { LinkButton } from "@/components";

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Box sx={{mr: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <CoffeeIcon size={24} />
            <Typography variant="h6" fontWeight={700}>
              Coffee Break Budget
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LinkButton href="/" startIcon={<TrendingUpIcon size={18} />} text="Dashboard" />
            <LinkButton href="/expenses" startIcon={<CirclePlusIcon size={18} />} text="Expenses" />
            <LinkButton href="/settings" startIcon={<SettingsIcon size={18} />} text="Settings" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
