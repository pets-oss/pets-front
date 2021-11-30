import React from 'react';

import { Grid, styled, TablePagination } from '@mui/material';

interface PaginationRoundedProps {
    count: number;
    page: number;
    onPageChange: (page: number) => void;
    pageSize: number;
    onPageSizeChange: (pageSize: number) => void;
}

const PREFIX = 'PaginationRounded';
const classes = {
    toolbar: `${PREFIX}-toolbar`,
    actions: `${PREFIX}-actions`,
};

const Root = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(2),
    [classes.toolbar]: {
        flexWrap: 'wrap',
    },
    [classes.actions]: {
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto',
        },
    },
}));

export default function PaginationRounded({
    count,
    page,
    onPageChange,
    pageSize,
    onPageSizeChange,
}: PaginationRoundedProps) {
    function handlePageChange(event, newPage) {
        onPageChange(newPage);
    }

    function handleChangeRowsPerPage(event) {
        const size = parseInt(event.target.value, 10);
        onPageSizeChange(size);
    }

    return (
        <Grid container justifyContent="flex-end">
            <Root>
                <TablePagination
                    component="div"
                    count={count}
                    page={page}
                    onPageChange={handlePageChange}
                    rowsPerPage={pageSize}
                    rowsPerPageOptions={[4, 12, 48, 192]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    classes={{
                        toolbar: classes.toolbar,
                        actions: classes.actions,
                    }}
                    labelRowsPerPage="Items per page"
                />
            </Root>
        </Grid>
    );
}
