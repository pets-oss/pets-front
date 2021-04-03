import React from 'react';
import { Link } from 'react-router-dom';

import { Grow, Typography } from '@material-ui/core';
import Page from './Page';

function PageNotImplemented() {
    return (
        <Grow in timeout={800}>
            <div>
                <Page>
                    <Typography variant="h3" component="h1">
                        Page is not implemented yet
                    </Typography>
                    <Typography variant="body1">
                        Try navigating to <Link to="/">homepage</Link>
                    </Typography>
                </Page>
            </div>
        </Grow>
    );
}

export default PageNotImplemented;
