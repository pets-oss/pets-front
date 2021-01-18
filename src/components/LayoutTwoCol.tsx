import React, { ReactNode } from 'react';

import { Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    })
);

interface Props {
    children: {
        first: ReactNode;
        second: ReactNode;
    };
}

function LayoutTwoCol({ children }: Props) {
    const { first, second } = children;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    {first}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {second}
                </Grid>
            </Grid>
        </div>
    );
}

export default LayoutTwoCol;
