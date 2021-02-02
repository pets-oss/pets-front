import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import { Omit } from '@material-ui/types';

const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        textAlign: 'left',
    },
    toolbarMenuRow: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    menuItem: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    hasIconAndText: {
        '& .MuiListItemIcon-root': {
            marginRight: 4,
        },
    },
}));

interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary?: string;
    to: string;
    className?: string;
}

function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to, className } = props;
    const classes = useStyles();

    const renderLink = React.useMemo(
        () =>
            React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
                <RouterLink className={classes.menuItem} to={to} ref={ref} {...itemProps} />
            )),
        [to, classes]
    );

    return (
        <li>
            <ListItem className={className} button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                {primary ? <ListItemText primary={primary} /> : null}
            </ListItem>
        </li>
    );
}

interface ListItemButtonProps {
    icon?: React.ReactElement;
    primary?: string;
    onClick: () => void;
    className?: string;
}

function ListItemButton(props: ListItemButtonProps) {
    const { icon, primary, className, onClick } = props;

    return (
        <li>
            <ListItem className={className} button onClick={onClick}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                {primary ? <ListItemText primary={primary} /> : null}
            </ListItem>
        </li>
    );
}

function AuthNav() {
    return <ListItemLink to="/animal-list" primary="Animals" />;
}

export default function SiteTopNavigation() {
    const classes = useStyles();
    const theme = useTheme();
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        PetBook
                    </Typography>
                    <List component="nav" className={classes.toolbarMenuRow} aria-label="top navigation">
                        {useMediaQuery(theme.breakpoints.up('sm')) ? (
                            <>
                                <ListItemLink to="/" primary="Home" />
                                <ListItemLink to="/about" primary="About" />
                                {isAuthenticated && <AuthNav />}
                            </>
                        ) : null}
                        {isAuthenticated ? (
                            <>
                                <ListItemLink
                                    to="/user-profile"
                                    primary={user.name}
                                    className={classes.hasIconAndText}
                                    icon={<AccountCircleTwoToneIcon />}
                                />
                                <Divider orientation="vertical" flexItem />
                                <ListItemButton
                                    icon={<ExitToAppTwoToneIcon />}
                                    onClick={() =>
                                        logout({
                                            returnTo: window.location.origin,
                                        })
                                    }
                                />
                            </>
                        ) : (
                            <ListItemButton
                                primary="Login"
                                className={classes.hasIconAndText}
                                icon={<AccountCircleTwoToneIcon />}
                                onClick={() => loginWithRedirect()}
                            />
                        )}
                    </List>
                </Toolbar>
            </AppBar>
        </div>
    );
}
