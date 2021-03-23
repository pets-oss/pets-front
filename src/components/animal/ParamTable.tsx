import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface ParamTableProps {
    items: ParamsTableRow[];
}

interface ParamsTableRow {
    title: string;
    value?: string;
}

export default function ParamTable({ items }: ParamTableProps) {
    const classes = useStyles();

    return (
        <Box>
            {items.map((item: ParamsTableRow, index: number) => (
                <Box className={classes.root} key={index}>
                    <Box className={classes.titleContainer}>
                        <Typography className={classes.title}>{item.title}</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.value}>{item.value ? item.value : '-'}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: '0 10px 0 10px',
    },
    titleContainer: {
        flexShrink: 0,
    },
    title: {
        fontWeight: 600,
        marginRight: 15,
        marginBottom: 2,
        minWidth: '90px',
    },
    value: {
        color: theme.palette.grey[500],
        textAlign: 'justify',
    },
}));
