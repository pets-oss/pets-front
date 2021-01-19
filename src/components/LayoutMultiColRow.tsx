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
    children: ReactNode;
}

function LayoutMultiColRow({ children }: Props) {
    const classes = useStyles();

    const colNum = React.Children.count(children);
    const maxColNum = 4;
    const sizeSm = !!Math.floor(12 / colNum); // method overload signature matching

    // no render for invalid component usage
    if (!colNum || colNum > maxColNum) {
        return null;
    }

    const items: ReactNode[] = [];
    React.Children.forEach(children, (child, index) => {
        items.push(
            <Grid key={`grid-col-${index}`} item xs={12} sm={sizeSm}>
                {child}
            </Grid>
        );
    });

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {items}
            </Grid>
        </div>
    );
}

export default LayoutMultiColRow;
