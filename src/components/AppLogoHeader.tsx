import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../logo.svg";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '40vmin',
    pointerEvents: 'none',
  }
});

function AppLogoHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />
      <Typography variant="h3" component="h1" align="center">
        Pets information system
      </Typography>
    </div>
  );
}

export default AppLogoHeader;
