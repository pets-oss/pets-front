import { NavLink } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Link, styled, Toolbar, Typography } from '@mui/material';
import { navigation, NavigationItem } from '../../navigation';
import TopAuthNav from './TopAuthNav';

const PREFIX = 'AppTopNavigation';
const classes = {
    appBar: `${PREFIX}-appBar`,
    title: `${PREFIX}-title`,
    link: `${PREFIX}-link`,
};

const Root = styled('div')(({ theme }) => ({
    [`& .${classes.appBar}`]: {
        backgroundColor: theme.palette.secondary.light,
    },
    [`& .${classes.title}`]: {
        flexGrow: 1,
        textAlign: 'left',
        fontSize: '1.5rem',
    },
    [`& .${classes.link}`]: {
        margin: theme.spacing(1, 1.5),
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.palette.text.secondary,
        '&.active': {
            color: theme.palette.text.primary,
        },
    },
}));

export default function AppTopNavigation() {
    const { isAuthenticated } = useAuth0();

    return (
        <Root>
            <AppBar className={classes.appBar} position="fixed" color="default">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        PetBook
                    </Typography>
                    {navigation
                        .filter((item: NavigationItem) => {
                            return item.authRequired ? isAuthenticated : true;
                        })
                        .map((item: NavigationItem) => (
                            <Link component={NavLink} className={classes.link} key={item.title} to={item.to}>
                                {item.title}
                            </Link>
                        ))}
                    <TopAuthNav />
                </Toolbar>
            </AppBar>
        </Root>
    );
}
