import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: '650',
    },
});

type ParamTableProps = {
    items: ParamsTableRow[];
};

type ParamsTableRow = {
    label: string;
    value: string;
};

export default function Paramstable({ items }: ParamTableProps) {
    const classes = useStyles();
    return (
        <>
            <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableBody>
                        {items.map((item: ParamsTableRow, index: number) => (
                            <TableRow hover key={index}>
                                <TableCell scope="row">
                                    <Typography component="h1">
                                        <Box fontWeight="fontWeightBold" m={1}>
                                            {item.label}
                                        </Box>
                                    </Typography>
                                </TableCell>
                                <TableCell scope="row" align="right">
                                    <Typography component="h5">
                                        <Box fontWeight="fontWeightRegular" m={1}>
                                            {item.value}
                                        </Box>
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
