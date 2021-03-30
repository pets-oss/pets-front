import React from 'react';

import { Box, Divider, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 500,
        variant: 'body2',
    },
    value: {
        fontWeight: 100,
        variant: 'body2',
        color: 'rgb(128, 128, 128)',
    },
});

export default function ParamTable({ title, value }) {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.box}>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.value}>{value}</Typography>
            </Box>
            <Divider />
        </Box>
    );
}
