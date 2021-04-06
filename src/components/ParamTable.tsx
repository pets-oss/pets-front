import React from 'react';

import { Box } from '@material-ui/core';

export default function ParamTable({ data }: ParamTableProps) {
    return (
        <>
            {data.map((item, index) => (
                <Box key={index} display="flex" flexDirection="row" justifyContent="space-between" borderBottom={1}>
                    <Box>{item.title}</Box>
                    <Box>{item.value}</Box>
                </Box>
            ))}
        </>
    );
}

interface ParamTableProps {
    data: ParamTableRow[];
}

interface ParamTableRow {
    title: string;
    value: string;
}
