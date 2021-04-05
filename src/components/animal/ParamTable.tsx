import React from 'react';

import { Box, makeStyles, Theme, Typography } from '@material-ui/core';

export default function ParamListTable({ animalInfo }: ParamListTableProps) {
    const classes = useStyles();

    return (
        <Box py={1}>
            {animalInfo
                .filter(item => item.value)
                .map(({ title, value }, index) => (
                    <Box className={classes.rowContainer} key={`${title}-${index}`}>
                        <Typography variant="body1" className={classes.title} color="textPrimary">
                            {title}
                        </Typography>
                        <Typography variant="body1" className={classes.value} color="textSecondary">
                            {value}
                        </Typography>
                    </Box>
                ))}
        </Box>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
    },
    rowContainer: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        flexBasis: '30%',
        flexShrink: 0,
    },
    value: {
        textAlign: 'justify',
        textAlignLast: 'right',
    },
}));

interface ParamListTableProps {
    animalInfo: ParamTableItem[];
}

export interface ParamTableItem {
    title: string;
    value?: string | number;
}
