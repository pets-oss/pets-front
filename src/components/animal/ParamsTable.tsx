import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

export default function ParamsTable({ items }: ParamsTableProps) {
    const classes = useStyles();
    return (
        <Box >
            {items.map((item: ParamsTableRow, index: number) => (
                <Box 
                    display="flex"
                    justifyContent="space-between" 
                    key={index}
                    className={classes.root}
                    borderBottom={1}
                    >
                   <Typography className={classes.title}>{item.title}</Typography>
                   <Typography className={classes.value}>{item.value}</Typography>
                   
                </Box>
            ))}
        </Box>
    );
}

interface ParamsTableProps {
    items: ParamsTableRow[];
}
interface ParamsTableRow {
    title: string;
    value: string | number;
}

const useStyles = makeStyles(theme => ({
    root: {
        borderColor: theme.palette.grey[300],
        padding: 4,
        marginBottom: 3
    },
    title: {
        fontWeight: 700,
    },
    value: {
        color: theme.palette.grey[600],
    }
}));
