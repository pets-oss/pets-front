import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import useMobileXS from '../../hooks/useMobileXS';

export default function TopAuthNav() {
    const classes = useStyles();
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const matchesMobileXS = useMobileXS();

    const getShortUserName = (username: string): string => {
        const words = username.split(' ');
        let initials = '';
        words.forEach(word => {
            initials += word[0];
        });
        return initials;
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLinkProfileAndClose = () => {
        history.push('/user-profile');
        setAnchorEl(null);
    };

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <Button
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        startIcon={<AccountCircleTwoToneIcon />}
                    >
                        <Typography component="span" className={classes.label} noWrap>
                            {matchesMobileXS ? getShortUserName(user.name) : user.name}
                        </Typography>
                    </Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLinkProfileAndClose}>Profile</MenuItem>
                        <MenuItem
                            onClick={() =>
                                logout({
                                    returnTo: window.location.origin,
                                })
                            }
                        >
                            Logout
                        </MenuItem>
                    </Menu>
                </>
            ) : (
                <IconButton aria-label="login" edge="end" onClick={() => loginWithRedirect()} color="inherit">
                    <AccountCircleTwoToneIcon />
                </IconButton>
            )}
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    label: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        [theme.breakpoints.down('sm')]: {
            maxWidth: 150,
        },
    },
}));
