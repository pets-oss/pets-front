import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { Switch, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SiteTopNavigation from "./components/SiteTopNavigation";
import SiteBottomNavigation from "./components/SiteBottomNavigation";
import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import UserProfile from "./pages/UserProfile";
import AnimalList from "./pages/AnimalList";
import Animal from "./pages/Animal";
import PageNotImplemented from "./pages/PageNotImplemented";


const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#e8cdb8',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <SiteTopNavigation />
        <Container component="main" className={classes.main} maxWidth="lg">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/user-profile" component={UserProfile} />
            <Route exact path="/animal-list" component={AnimalList} />
            <Route exact path="/animal/:id" component={Animal} />
            <Route exact path="/search" component={PageNotImplemented} />
            <Route exact path="/login" component={PageNotImplemented} />
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
        <SiteBottomNavigation />
      </div>
      <LocationDisplay />
    </ThemeProvider>
  );
}

export default App;
