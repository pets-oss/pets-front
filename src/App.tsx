import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import UserProfile from "./pages/UserProfile";
import AnimalList from "./pages/AnimalList";
import Animal from "./pages/Animal";


const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <nav className="nav">
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
          <Link to="/user-profile">
            User profile
          </Link>
          <Link to="/animal-list">
            Animal list
          </Link>
        </nav>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/user-profile" component={UserProfile} />
          <Route exact path="/animal-list" component={AnimalList} />
          <Route exact path="/animal/:id" component={Animal} />
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <LocationDisplay />
    </ThemeProvider>
  );
}

export default App;
