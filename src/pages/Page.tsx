import React, { ReactNode } from 'react';

import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMobile from '../hooks/useMobile';

interface PageProps {
    title?: string | ReactNode;
    topSection?: ReactNode;
    // Content
    children: ReactNode | ReactNode[];
    displayTitleOnMobile?: boolean;
}

export default function Page({ title, topSection, children, displayTitleOnMobile }: PageProps) {
    const classes = useStyles();
    const mobile = useMobile();

    return (
        <Container component="main" className={classes.root} maxWidth="lg">
            <Grid container spacing={4}>
                {(!mobile || displayTitleOnMobile) && (
                    <Grid item xs={12}>
                        {title && <PageTitle title={title} />}
                    </Grid>
                )}
                {topSection && (
                    <Grid item xs={12}>
                        {topSection}
                    </Grid>
                )}
                <Grid item xs={12} className={classes.content}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}

function PageTitle({ title }: { title: string | ReactNode }) {
    if (typeof title !== 'string') {
        // Custom title
        return <>title</>;
    }

    return (
        <>
            <Box mb={1}>
                <Typography variant="h3" component="h1" color="textSecondary">
                    {title}
                </Typography>
            </Box>
            <Divider />
        </>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(1),
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 64 + theme.spacing(3), // follow fixed AppBar minHeight: 64
        },
        marginBottom: theme.spacing(10),
    },
    heading: {
        marginBottom: theme.spacing(2),
    },
    endAlign: {
        textAlign: 'end',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
}));
