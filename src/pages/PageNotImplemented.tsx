import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@material-ui/core';

function PageNotImplemented() {
    return (
        <div className="NotFound-page">
            <Typography variant="h3" component="h1">
                Page is not implemented yet
            </Typography>
            <Typography variant="body1">
                Try navigating to <Link to="/">homepage</Link>
            </Typography>
        </div>
    );
}

export default PageNotImplemented;
