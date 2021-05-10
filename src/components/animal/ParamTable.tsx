import React from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';

export default function ParamTable({ details }: ParamTableProps) {
    const classes = useStyles();

    return (
        <>
            {details &&
                details.map((item, index) => (
                    <Box key={index} display="flex" justifyContent="space-between" className={classes.item} p={1}>
                        <Typography className={classes.title} color="textPrimary">
                            {item.title}
                        </Typography>
                        <Typography className={classes.value} color="textSecondary">
                            {item.value}
                        </Typography>
                    </Box>
                ))}
        </>
    );
}

const useStyles = makeStyles(theme => ({
    item: {
        borderBottom: `1px solid ${theme.palette.grey['400']}`,
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
    },
    title: {
        flex: 1,
        fontWeight: theme.typography.fontWeightBold,
    },
    value: {
        flex: 1,
        textAlign: 'left',
        [theme.breakpoints.up('sm')]: {
            flex: 3,
            textAlign: 'right',
        },
    },
}));

interface ParamTableProps {
    details?: { title: string; value: string | number }[];
}
