import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';

interface PaginationRoundedProps {
    count: number;
    page: number;
    onPageChange: (page: number) => void;
    pageSize: number;
    onPageSizeChange: (pageSize: number) => void;
}

export default function PaginationRounded({
    count,
    page,
    onPageChange,
    pageSize,
    onPageSizeChange,
}: PaginationRoundedProps) {
    const classes = useStyles();

    function handlePageChange(event, newPage) {
        onPageChange(newPage);
    }

    function handleChangeRowsPerPage(event) {
        const size = parseInt(event.target.value, 10);
        onPageSizeChange(size);
    }

    return (
        <Grid container justify="flex-end">
            <div className={classes.root}>
                <TablePagination
                    count={count}
                    page={page}
                    onPageChange={handlePageChange}
                    rowsPerPage={pageSize}
                    rowsPerPageOptions={[4, 12, 48, 192]}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    classes={{
                        toolbar: classes.toolbar,
                        actions: classes.actions,
                    }}
                    labelRowsPerPage="Items per page"
                />
            </div>
        </Grid>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    actions: {
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto',
        },
    },
}));
