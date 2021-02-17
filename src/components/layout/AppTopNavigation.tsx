import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TopAuthNav from './TopAuthNav';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
            textAlign: 'left',
        },
        link: {
            margin: theme.spacing(1, 1.5),
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: theme.palette.text.secondary,
        },
        // todo: NavLink active class is not working
    })
);

export default function AppTopNavigation() {
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();

    return (
        <AppBar position="fixed" color="default" elevation={0}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    PetBook
                </Typography>
                <Link component={NavLink} to="/" className={classes.link}>
                    Home
                </Link>
                <Link component={NavLink} to="/about" className={classes.link}>
                    About
                </Link>
                {isAuthenticated && (
                    <>
                        <Link component={NavLink} to="/animal-list" className={classes.link}>
                            Animals
                        </Link>
                        <Link component={NavLink} to="/favourites" className={classes.link}>
                            Favourites
                        </Link>
                        <Link component={NavLink} to="/reports" className={classes.link}>
                            Reports
                        </Link>
                    </>
                )}
                <TopAuthNav />
            </Toolbar>
        </AppBar>
    );
}
