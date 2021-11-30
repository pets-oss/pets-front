import React from 'react';

import { Box, Typography } from '@mui/material';
import Page from './Page';

function About() {
    return (
        <Page title="About this project">
            <Typography variant="body1" paragraph>
                Open Source database for administration and documentation of sheltered animals information.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Goal:</strong> Easen the process of sheltered animals information administration.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Main functions:</strong>
            </Typography>
            <Box ml={2} mb={2}>
                <ul>
                    <li>Portfolios of Animal shelter organizations</li>
                    <li>Animal cards with main information for shelter/future owners</li>
                    <li>Animal check-in/check-out process</li>
                    <li>Various events related to particular animal care - like vacinnation, sterilization etc.</li>
                </ul>
            </Box>
            <Typography variant="body1" paragraph>
                And many more to come :)
            </Typography>
        </Page>
    );
}

export default About;
