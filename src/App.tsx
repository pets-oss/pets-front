import './App.css';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import SiteBottomNavigation from './components/SiteBottomNavigation';
import SiteTopNavigation from './components/SiteTopNavigation';
import About from './pages/About';
import Animal from './pages/Animal';
import AnimalList from './pages/AnimalList';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import PageNotImplemented from './pages/PageNotImplemented';
import UserProfile from './pages/UserProfile';
import MuiTheme from './theme';

const LocationDisplay = () => {
    const location = useLocation();
    return <div data-testid="location-display">{location.pathname}</div>;
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#e8cdb8',
    },
    main: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 56 + theme.spacing(2), // follow AppBar minHeight: 56
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: 64 + theme.spacing(3), // follow AppBar minHeight: 64
        },
        marginBottom: theme.spacing(10),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={MuiTheme}>
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
                        <Route exact path="/logout" component={PageNotImplemented} />
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
