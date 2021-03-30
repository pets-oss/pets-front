import React from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function ParamTable({ params }: ParamTableProps) {
    const classes = useStyles();

    return (
        <div>
            {params.map((param, index) => (
                <Box
                    display="flex"
                    justifyContent="space-between"
                    className={classes.root}
                    key={index}
                    borderBottom={1}
                >
                    <Box className={classes.paramTitle}>{param.title}</Box>
                    <Box className={classes.paramValue}>{param.value}</Box>
                </Box>
            ))}
        </div>
    );
}

interface ParamTableProps {
    params: ParamTableItem[];
}

interface ParamTableItem {
    title: string;
    value: string | number;
}

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '1.1rem',
        padding: 2,
        borderColor: theme.palette.grey[400],
    },
    paramValue: {
        color: theme.palette.grey[600],
    },
    paramTitle: {
        fontWeight: 500,
    },
}));
