import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/core
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
// import MenuIcon from "@material-ui/icons/Menu";

// Map styles
import styles from "../../assets/jss/Navbar/Navbar";
const useStyles = makeStyles(styles);

// Export Navbar
export default (props) => {
  const classes = useStyles();
  const { connected } = props;

  return (
    <AppBar position="static" className={classes.navbar}>
      {/* <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={classes.menuIcon}
      >
        <MenuIcon />
      </IconButton> */}
      <Typography variant="h6">
        Control App {connected ? " Dashboard" : null}
      </Typography>
    </AppBar>
  );
};
