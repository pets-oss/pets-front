import React, { ReactNode } from 'react';

import { Grid } from '@mui/material';

interface Props {
    children: ReactNode;
}

function LayoutMultiColRow({ children }: Props) {
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
        <div style={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                {items}
            </Grid>
        </div>
    );
}

export default LayoutMultiColRow;
