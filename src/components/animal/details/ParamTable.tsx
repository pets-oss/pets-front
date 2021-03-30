import React from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface KeyValue {
    title: string;
    value: string;
}

interface ParamTableProps {
    params: KeyValue[];
}

export default function ParamTable({ params }: ParamTableProps) {
    const classes = useStyles();
    return (
        <Box my={1}>
            {params.map(({ title, value }, index) => (
                <Box display="flex" justifyContent="space-between" key={index} py={0.5} px={1} className={classes.row}>
                    <Box fontWeight={700}>{title}</Box>
                    <Box fontWeight={400} color="grey.600">
                        {value}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    row: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
}));
