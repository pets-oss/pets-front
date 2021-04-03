import React from 'react';

import { Box, makeStyles, Theme, Typography } from '@material-ui/core';

export default function ParamListTable({ items }: ParamListTableProps) {
    const classes = useStyles();

    if (!(items.length > 0)) {
        return null;
    }

    return (
        <Box py={1}>
            {items.map(({ title, value }, index) => (
                <Box
                    p={1}
                    display="flex"
                    justifyContent="space-between"
                    className={classes.row}
                    key={`${title}-${index}`}
                >
                    <Typography variant="body1" className={classes.title} color="textPrimary">
                        {title}
                    </Typography>
                    <Typography variant="body1" className={classes.value} color="textSecondary">
                        {value || '-'}
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
    row: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
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
    items: ParamTableItem[];
}

export interface ParamTableItem {
    title: string;
    value?: string | number;
}
