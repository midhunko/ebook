import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

function TopBar() {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }} className="page-main-top">
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ebook
          </Typography>
          {location.pathname === "/" && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Add New Page
            </Typography>
          )}

          {location.pathname !== "/" && (
            <Button
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              + Add Page
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
