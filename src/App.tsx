import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import logo from "./logo.svg";
import "./App.css";
import theme from "./theme";
import { Typography } from "@material-ui/core";

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
