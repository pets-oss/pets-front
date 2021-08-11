import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';

interface PaginationRoundedProps {
    count: number;
    nextPage: () => void;
    prevPage: () => void;
    firstPage: (size: number) => void;
    pageSize: number;
    onPageSizeChange: (pageSize: number) => void;
}

export default function PaginationRounded({
    count,
    nextPage,
    prevPage,
    firstPage,
    pageSize,
    onPageSizeChange,
}: PaginationRoundedProps) {
    const classes = useStyles();

    const [page, setPage] = useState(0);

    function handleChangePage(event, newPage) {
        if (newPage > page) {
            nextPage();
        } else {
            prevPage();
        }

        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        const size = parseInt(event.target.value, 10);
        onPageSizeChange(size);
        setPage(0);
        firstPage(size);
    }

    return (
        <Grid container justify="flex-end">
            <div className={classes.root}>
                <TablePagination
                    count={count}
                    page={page}
                    onChangePage={handleChangePage}
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
