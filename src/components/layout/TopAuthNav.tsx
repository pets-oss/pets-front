import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

export default function TopAuthNav() {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLinkProfile = () => {
        history.push('/user-profile');
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
                        {user.name}
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
                        <MenuItem onClick={handleLinkProfile}>Profile</MenuItem>
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
