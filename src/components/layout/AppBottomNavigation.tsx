import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Slide,
    styled,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material';
import { navigation, NavigationItem } from '../../navigation';

export const BOTTOM_NAVIGATION_HEIGHT = 64;

const PREFIX = 'AppBottomNavigation';

const classes = {
    drawerHeader: `${PREFIX}-drawerHeader`,
    appBar: `${PREFIX}-appBar`,
};

const Root = styled('div')(({ theme }) => ({
    [`& .${classes.appBar}`]: {
        top: 'auto',
        bottom: 0,
        height: BOTTOM_NAVIGATION_HEIGHT,
        backgroundColor: theme.palette.secondary.light,
    },

    [`& .${classes.drawerHeader}`]: {
        display: 'flex',
        alignItems: 'center',
        // necessary for height alignment with app bar
        // ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },

    // show: {
    //     transform: 'translateY(0)',
    //     transition: 'transform .5s',
    // },
    // hide: {
    //     transform: 'translateY(-110%)',
    //     transition: 'transform .5s',
    // },
}));

const StyledHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    // necessary for height alignment with app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

interface Props {
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="up" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function AppBottomNavigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setDrawerOpen] = React.useState(false);
    const { isAuthenticated } = useAuth0();

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleNavListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, pathTo: string) => {
        navigate(pathTo);
        setDrawerOpen(false);
    };

    const linkToCurrentPage = (pathTo: string) => {
        return location.pathname === pathTo;
    };

    return (
        <HideOnScroll>
            <Root>
                <AppBar className={classes.appBar} position="fixed" color="default">
                    <Toolbar>
                        <IconButton edge="start" onClick={handleDrawerOpen} color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <Drawer anchor="bottom" open={open} onClose={handleDrawerClose}>
                        <div role="presentation">
                            <StyledHeader>
                                <Typography variant="h6">PetBook</Typography>
                                <IconButton edge="end" onClick={handleDrawerClose}>
                                    <CloseIcon />
                                </IconButton>
                            </StyledHeader>
                            <Divider />
                            <List>
                                {navigation
                                    .filter((item: NavigationItem) => {
                                        return item.authRequired ? isAuthenticated : true;
                                    })
                                    .map((item: NavigationItem) => (
                                        <ListItem
                                            button
                                            key={item.title}
                                            selected={linkToCurrentPage(item.to)}
                                            onClick={event => handleNavListItemClick(event, item.to)}
                                        >
                                            <ListItemIcon>
                                                <ChevronRightIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={item.title} />
                                        </ListItem>
                                    ))}
                            </List>
                        </div>
                    </Drawer>
                </AppBar>
            </Root>
        </HideOnScroll>
    );
}
