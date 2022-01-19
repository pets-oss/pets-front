import React, { ReactNode } from 'react';

import { Container, Grid, styled, Typography } from '@mui/material';
import useNavMobile from '../hooks/useNavMobile';

interface PageProps {
    title?: string | ReactNode;
    topSection?: ReactNode;
    // Content
    children: ReactNode | ReactNode[];
    displayTitleOnMobile?: boolean;
}

const PREFIX = 'Page';

const classes = {
    heading: `${PREFIX}-heading`,
    endAlign: `${PREFIX}-endAlign`,
    title: `${PREFIX}-title`,
    content: `${PREFIX}-content`,
};

const Root = styled('main')(({ theme }) => ({
    paddingTop: 0,
    [theme.breakpoints.up('sm')]: {
        paddingTop: 64 + 32,
    },

    [`& .${classes.heading}`]: {
        marginBottom: theme.spacing(2),
    },
    [`& .${classes.endAlign}`]: {
        textAlign: 'end',
    },
    [`& .${classes.title}`]: {
        fontWeight: 500,
    },
    [`& .${classes.content}`]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
}));

export default function Page({ title, topSection, children, displayTitleOnMobile }: PageProps) {
    const matchesNavMobile = useNavMobile();

    return (
        <Root>
            <Container maxWidth="lg">
                    {(!matchesNavMobile || displayTitleOnMobile) && title && (
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
        </Root>
    );
}

function PageTitle({ title }: { title: string | ReactNode }) {
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
