import React from 'react';

import { styled, Typography } from '@mui/material';
import logo from '../../logo.svg';

const PREFIX = 'AppLogoHeader';

const classes = {
    logo: `${PREFIX}-logo`,
};

const Root = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [`& .${classes.logo}`]: {
        marginTop: 64,
        height: '40vmin',
        pointerEvents: 'none',
    },
}));

function AppLogoHeader() {
    return (
        <Root>
            <img src={logo} className={classes.logo} alt="logo" />
            <Typography variant="h3" component="h1" align="center">
                Pets information system
            </Typography>
        </Root>
    );
}

export default AppLogoHeader;
