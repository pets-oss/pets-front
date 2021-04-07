import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type ParamTableProps = {
    items: ParamsTableRow[];
};

type ParamsTableRow = {
    label: string;
    value: string;
};

export default function ParamsTable({ items }: ParamTableProps) {
    const classes = useStyles();
    return (
        <Typography>
            {items.map((item: ParamsTableRow, index: number) => (
                <div style={{ width: '100%' }}>
                    <Box display="flex" justifyContent="space-between" key={index} className={classes.MuiBoxRoot129}>
                        <Box p={1} fontWeight="fontWeightBold">
                            {item.label}
                        </Box>
                        <Box p={1} className={classes.boxColor}>
                            {item.value || '-'}
                        </Box>
                    </Box>
                </div>
            ))}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    MuiBoxRoot129: {
        borderBottom: `1px ${theme.palette.tertiary.dark} solid`,
    },
    boxColor: {
        color: theme.palette.tertiary.dark,
    },
}));
