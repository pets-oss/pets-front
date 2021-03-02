import './App.css';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Skeleton } from '@material-ui/lab';
import AppBottomNavigation from './components/layout/AppBottomNavigation';
import AppTopBar from './components/layout/AppTopBar';
import AppTopNavigation from './components/layout/AppTopNavigation';
import PageNotFound from './pages/PageNotFound';
import MuiTheme from './theme';
import PrivateRoute from './utils/auth/PrivateRoute';

const LocationDisplay = () => {
    const location = useLocation();
    return <div data-testid="location-display">{location.pathname}</div>;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
}));

export default function App() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesLgScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <ThemeProvider theme={MuiTheme}>
            <CssBaseline />
            <div className={classes.root}>
                {matchesLgScreen ? <AppTopNavigation /> : <AppTopBar />}
                <React.Suspense fallback={<Skeleton variant="rect" height="100vh" />}>
                    <Switch>
                        <Route exact path="/about" component={React.lazy(() => import('./pages/About'))} />
                        <PrivateRoute
                            exact
                            path="/user-profile"
                            component={React.lazy(() => import('./pages/UserProfile'))}
                        />
                        <PrivateRoute
                            exact
                            path="/animal-list"
                            component={React.lazy(() => import('./pages/AnimalsPage'))}
                        />
                        <PrivateRoute
                            exact
                            path="/animal/:id"
                            component={React.lazy(() => import('./pages/AnimalDetailsPage'))}
                        />
                        <Route
                            exact
                            path="/search"
                            component={React.lazy(() => import('./pages/PageNotImplemented'))}
                        />
                        <Route exact path="/login" component={React.lazy(() => import('./pages/PageNotImplemented'))} />
                        <Route
                            exact
                            path="/logout"
                            component={React.lazy(() => import('./pages/PageNotImplemented'))}
                        />
                        <Route exact path="/" component={React.lazy(() => import('./pages/Home'))} />
                        <Route component={PageNotFound} />
                    </Switch>
                </React.Suspense>
                {!matchesLgScreen && <AppBottomNavigation />}
            </div>
            <LocationDisplay />
        </ThemeProvider>
    );
}
