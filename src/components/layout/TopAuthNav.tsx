import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, IconButton, Menu, MenuItem, styled } from '@mui/material';
import useMobileXS from '../../hooks/useMobileXS';

const StyledSpan = styled('span')(({ theme }) => ({
    fontSize: 'inherit',
    fontWeight: 'inherit',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
        maxWidth: 150,
    },
}));

export default function TopAuthNav() {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const matchesMobileXS = useMobileXS();

    const getShortUserName = (username?: string): string => {
        if (!username) {
            return '';
        }

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

    const handleLinkProfile = () => {
        navigate('/user-profile');
        handleClose();
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
                        startIcon={<AccountCircleIcon />}
                    >
                        <StyledSpan>{matchesMobileXS ? getShortUserName(user?.name) : user?.name}</StyledSpan>
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
                    <AccountCircleIcon />
                </IconButton>
            )}
        </div>
    );
}
