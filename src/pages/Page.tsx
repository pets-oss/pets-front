import React from 'react';

import { Box } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface PageProps {
    children: React.ReactNode;
    action?: React.ReactNode;
    title?: string;
}

export default function Page({ children, action, title }: PageProps) {
    return (
        <Box>
            {title && <PageHeading title={title} action={action} />}
            {children}
        </Box>
    );
}

interface PageHeadingProps {
    title: string;
    action?: React.ReactNode;
}

function PageHeading({ title, action }: PageHeadingProps) {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={10}>
                <Typography className={classes.title} variant="h3" color="textSecondary">
                    {title}
                </Typography>
            </Grid>
            {action && (
                <Grid item xs={2} className={classes.endAlign}>
                    {action}
                </Grid>
            )}
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    title: {
        paddingBottom: theme.spacing(1),
    },
    endAlign: {
        textAlign: 'end',
    },
}));
