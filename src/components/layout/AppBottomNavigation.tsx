import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { navigation, NavigationItem } from '../../navigation';

export const BOTTOM_NAVIGATION_HEIGHT = 64;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            top: 'auto',
            bottom: 0,
            height: BOTTOM_NAVIGATION_HEIGHT,
            backgroundColor: theme.palette.primary.light,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 3),
            // necessary for height alignment with app bar
            ...theme.mixins.toolbar,
            justifyContent: 'space-between',
        },
        show: {
            transform: 'translateY(0)',
            transition: 'transform .5s',
        },
        hide: {
            transform: 'translateY(-110%)',
            transition: 'transform .5s',
        },
    })
);

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
    const classes = useStyles();
    const history = useHistory();
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
        history.push(pathTo);
        setDrawerOpen(false);
    };

    const linkToCurrentPage = (pathTo: string) => {
        return location.pathname === pathTo;
    };

    const navList = () => (
        <div role="presentation">
            <div className={classes.drawerHeader}>
                <Typography variant="h6">PetBook</Typography>
                <IconButton edge="end" onClick={handleDrawerClose}>
                    <CloseIcon />
                </IconButton>
            </div>
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
    );

    return (
        <HideOnScroll>
            <AppBar className={classes.appBar} position="fixed" color="default">
                <Toolbar>
                    <IconButton edge="start" onClick={handleDrawerOpen} color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Drawer anchor="bottom" open={open} onClose={handleDrawerClose}>
                    {navList()}
                </Drawer>
            </AppBar>
        </HideOnScroll>
    );
}
