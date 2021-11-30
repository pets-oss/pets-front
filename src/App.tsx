import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';

import { Skeleton, styled, StyledEngineProvider, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBottom from './components/layout/ResponsiveAppBottom';
import ResponsiveAppTop from './components/layout/ResponsiveAppTop';
import PageNotFound from './pages/PageNotFound';
import Theme from './theme';
import PrivateRoute from './utils/auth/PrivateRoute';

const LocationDisplay = () => {
    const location = useLocation();
    return <div data-testid="location-display">{location.pathname}</div>;
};

const PageNotImplemented = React.lazy(() => import('./pages/PageNotImplemented'));

const About = React.lazy(() => import('./pages/About'));
const UserProfile = React.lazy(() => import('./pages/UserProfile'));
const AnimalsPage = React.lazy(() => import('./pages/AnimalsPage'));
const AnimalEditPage = React.lazy(() => import('./pages/AnimalEditPage'));
const AnimalDetailsPage = React.lazy(() => import('./pages/AnimalDetailsPage'));

const FavoritesPage = React.lazy(() => import('./pages/FavoritesPage'));
const Home = React.lazy(() => import('./pages/Home'));

const Root = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
}));

export default function App() {
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <Root>
                    <ResponsiveAppTop />
                    <React.Suspense fallback={<Skeleton variant="rectangular" height="100vh" width="100%" />}>
                        <Routes>
                            <Route path="/about" element={<About />} />
                            <Route
                                path="/user-profile"
                                element={
                                    <PrivateRoute>
                                        <UserProfile />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/animal-list"
                                element={
                                    <PrivateRoute>
                                        <AnimalsPage />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/animal/new"
                                element={
                                    <PrivateRoute>
                                        <AnimalEditPage />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/animal/:id"
                                element={
                                    <PrivateRoute>
                                        <AnimalDetailsPage />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/animal/:id/edit"
                                element={
                                    <PrivateRoute>
                                        <AnimalEditPage />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/favorites"
                                element={
                                    <PrivateRoute>
                                        <FavoritesPage />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="/search" element={<PageNotImplemented />} />
                            <Route path="/login" element={<PageNotImplemented />} />
                            <Route path="/logout" element={<PageNotImplemented />} />
                            <Route path="/" element={<Home />} />

                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </React.Suspense>
                    <ResponsiveAppBottom />
                </Root>
                <LocationDisplay />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
