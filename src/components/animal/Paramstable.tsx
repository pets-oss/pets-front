import React, { Fragment } from 'react';

import { Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export default function ParamsTable({ items }: ParamTableProps) {
    const classes = useStyles();

    return (
        <>
            {items.map((item: ParamsTableRow, index: number) => (
                <Box display="flex" justifyContent="space-between" key={index} className={classes.row}>
                    <Box p={1}>
                        <h2>{item.label}</h2>
                    </Box>
                    <Box p={1} className={classes.boxColor}>
                        <h3>{item.value || '-'}</h3>
                    </Box>
                </Box>
            ))}
        </>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    row: {
        borderBottom: `1px ${theme.palette.tertiary.dark} solid`,
    },
    boxColor: {
        color: theme.palette.tertiary.dark,
        textAlign: 'right',
    },
}));

interface ParamTableProps {
    items: ParamsTableRow[];
}

export interface ParamsTableRow {
    value?: string;
    label?: string | number;
}
