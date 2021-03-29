import React from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';

export function ParamsTable({ items = [] }: ParamsTableProps) {
    const classes = useStyles();

    if (!items.length) {
        return null;
    }

    return (
        <Typography className={classes.root} component="div">
            {items.map((item, index) => (
                <Box key={index} className={classes.row} display="flex" fontSize={16}>
                    <Box className={classes.title}>{item.title}</Box>
                    <Box className={classes.value}>{item.value ? item.value : ''}</Box>
                </Box>
            ))}
        </Typography>
    );
}
interface ParamsTableProps {
    items: ParamsTableItem[];
}

interface ParamsTableItem {
    title: string;
    value?: string;
}

const useStyles = makeStyles(theme => ({
    root: {},
    row: {
        borderBottom: '1px solid grey',
    },
    title: {
        fontWeight: 600,
    },
    value: {
        marginLeft: 'auto',
        textAlign: 'right',
    },
}));
