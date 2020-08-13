import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6" color="inherit">
          I'll come back to this later.
        </Typography>
        <Button>Sign Up!</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
