import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { Switch, Route, useLocation } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";
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
        <TopNavigation />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/user-profile" component={UserProfile} />
          <Route exact path="/animal-list" component={AnimalList} />
          <Route exact path="/animal/:id" component={Animal} />
          <Route exact path="/login" component={PageNotFound} />
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <LocationDisplay />
    </ThemeProvider>
  );
}

export default App;
