import './App.css';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import ResponsiveAppBottom from './components/layout/ResponsiveAppBottom';
import ResponsiveAppTop from './components/layout/ResponsiveAppTop';
import PageNotFound from './pages/PageNotFound';
import MuiTheme from './theme';
import PrivateRoute from './utils/auth/PrivateRoute';

const LocationDisplay = () => {
    const location = useLocation();
    return <div data-testid="location-display">{location.pathname}</div>;
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
});

export default function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={MuiTheme}>
            <CssBaseline />
            <div className={classes.root}>
                <ResponsiveAppTop />
                <React.Suspense fallback={<Skeleton variant="rect" height="100vh" width="100%" />}>
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
                            path="/animal/new"
                            component={React.lazy(() => import('./pages/NewAnimalPage'))}
                        />
                        <PrivateRoute
                            exact
                            path="/animal/:id"
                            component={React.lazy(() => import('./pages/AnimalDetailsPage'))}
                        />
                        <PrivateRoute
                            exact
                            path="/favorites/"
                            component={React.lazy(() => import('./pages/FavoritesPage'))}
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
                <ResponsiveAppBottom />
            </div>
            <LocationDisplay />
        </ThemeProvider>
    );
}
