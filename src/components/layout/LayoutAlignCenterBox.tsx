import React from 'react';

import { Box } from '@material-ui/core';

interface Props {
    children: React.ReactElement;
}

export default function LayoutAlignCenterBox(props: Props) {
    const { children } = props;
    return (
        <Box display="flex" justifyContent="center" width="100%">
            {children}
        </Box>
    );
}
