import React from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PetsTwoToneIcon from '@material-ui/icons/PetsTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
});

export default function SiteBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const theme = useTheme();

    // todo - there will be a problem with active nav if route will change

    return useMediaQuery(theme.breakpoints.down('xs')) ? (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction component={Link} to="/animal-list" label="Animals" icon={<PetsTwoToneIcon />} />
            <BottomNavigationAction component={Link} to="/search" label="Search" icon={<SearchTwoToneIcon />} />
        </BottomNavigation>
    ) : null;
}
