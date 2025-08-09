import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { CoffeeIcon } from "lucide-react";

const TopBar = () => {
  return <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
        <CoffeeIcon size={24} />
      </Box>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Coffee Break Budget
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
</Box>
};

export default TopBar;