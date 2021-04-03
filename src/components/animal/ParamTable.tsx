import React from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';

export default function ParamTable({ rowsArray }: any) {
    const classes = useStyles();

    console.log(rowsArray);
    return (
        <>
            <Box display="flex" justifyContent="space-between" className={classes.root} p={1}>
                <Typography variant="subtitle1">Age</Typography>
                <Typography className={classes.value}>26</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" className={classes.root} p={1}>
                <Typography variant="subtitle1">Age</Typography>
                <Typography className={classes.value}>26</Typography>
            </Box>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.grey['400']}`,
    },
    value: {
        color: theme.palette.grey['600'],
    },
}));

interface ParamTableProps {
    parameters: { key: string; value: string | number }[];
}
