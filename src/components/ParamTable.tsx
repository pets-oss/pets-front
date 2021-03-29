import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default function ParamTable({ items }: ParamTableProps) {
    const classes = useStyles();

    return (
        <Typography className={classes.root} component="div">
            {items.map((item: ParamTableItem, index: number) => (
                <Box className={classes.row} key={`param-row-${index}`} display="flex" justifyContent="space-between">
                    <Box className={classes.title} fontSize={16} p={1}>
                        {item.title}
                    </Box>
                    <Box className={classes.value} fontSize={16} p={1}>
                        {item.value ? item.value : 'n.d.'}
                    </Box>
                </Box>
            ))}
        </Typography>
    );
}

interface ParamTableProps {
    items: ParamTableItem[];
}

interface ParamTableItem {
    title: string;
    value?: string;
}

const useStyles = makeStyles(theme => ({
    root: {},
    row: {
        borderWidth: '0 0 1px 0',
        borderStyle: 'solid',
        borderColor: fade(theme.palette.grey['600'], 0.2),
    },
    title: {
        fontWeight: 500,
    },
    value: {
        marginLeft: 'auto',
        textAlign: 'right',
    },
}));
