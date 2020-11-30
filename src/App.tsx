import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import logo from "./logo.svg";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h3" component="h1">
            Pets information system
          </Typography>
          <Typography variant="body1">
            Edit <code>src/App.tsx</code> and save to reload.
            <br />
            Happy coding!
          </Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
