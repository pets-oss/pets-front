import "./AppLogoHeader.css";

import React from "react";
import { Typography } from "@material-ui/core";
import logo from "../logo.svg";

function AppLogoHeader() {
  return (
    <div className="App-logo-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant="h3" component="h1">
        Pets information system
      </Typography>
    </div>
  );
}

export default AppLogoHeader;
