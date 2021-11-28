import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import Page from './Page';

function PageNotFound() {
    return (
        <Page>
            <Typography variant="h3" component="h1">
                Page Not Found
            </Typography>
            <Typography variant="body1">
                Try navigating to <Link to="/">homepage</Link>
            </Typography>
        </Page>
    );
}

export default PageNotFound;
