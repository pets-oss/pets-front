import React from 'react';

import { Box, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.grey['400']}`,
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
    },
}));

export default function ParamTable({ details }: ParamTableProps) {
    return (
        <>
            {details &&
                details.map((item, index) => (
                    <StyledBox key={index} display="flex" justifyContent="space-between" p={1}>
                        <Typography color="textPrimary">{item.title}</Typography>
                        <Typography color="textSecondary">{item.value}</Typography>
                    </StyledBox>
                ))}
        </>
    );
}

interface ParamTableProps {
    details?: { title: string; value: string | number }[];
}
