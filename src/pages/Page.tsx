import React, { ReactNode } from 'react';

import { Fade } from '@material-ui/core';
import Container from '@material-ui/core/Container';
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
    const matchesMobile = useMobile();

    return (
        <Fade in timeout={600}>
            <Container component="main" className={classes.root} maxWidth="lg">
                <Grid container spacing={4}>
                    {(!matchesMobile || displayTitleOnMobile) && title && (
                        <Grid item xs={12}>
                            <PageTitle title={title} />
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
        </Fade>
    );
}

function PageTitle({ title }: { title: string | ReactNode }) {
    const classes = useStyles();

    if (typeof title !== 'string') {
        // Custom title
        return <>title</>;
    }

    return (
        <>
            <Typography className={classes.title} variant="h3" component="h1">
                {title}
            </Typography>
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
        position: 'absolute',
        marginBottom: theme.spacing(10),
    },
    heading: {
        marginBottom: theme.spacing(2),
    },
    endAlign: {
        textAlign: 'end',
    },
    title: {
        fontWeight: 500,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
}));
