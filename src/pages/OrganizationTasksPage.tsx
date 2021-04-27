import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import Page from './Page';

const GET_ORGANIZATION_TASKS_QUERY = loader('../graphql/queries/organizations-tasks.graphql');

export default function OrganizationTasksPage() {
    const classes = useStyles();
    const { loading, data, error } = useQuery(GET_ORGANIZATION_TASKS_QUERY);

    if (loading) {
        return <Skeleton animation="wave" variant="rect" height="70vh" />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <h2>Oooops! Something went wrong</h2>;
    }

    if (!data?.organizationTasks) {
        // TODO: replace with proper UI elements
        return <h2>Sorry, no data found.</h2>;
    }

    return (
        <Page title="Organization Tasks">
            {data.organizationTasks.map(organizationTask => (
                <Card key={organizationTask.id} className={classes.cardCharacteristics}>
                    <CardContent>
                        <Typography>{organizationTask.title}</Typography>
                        <Typography>{organizationTask.description}</Typography>
                    </CardContent>
                    {organizationTask.isDone ? (
                        <CardActions className={classes.isDone}>
                            <Typography align="center" className={classes.isDone}>
                                Task to be done
                            </Typography>
                        </CardActions>
                    ) : (
                        <CardActions className={classes.notDone}>
                            <Typography align="center" className={classes.notDone}>
                                Task to be taken
                            </Typography>
                        </CardActions>
                    )}
                </Card>
            ))}
        </Page>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    isDone: {
        backgroundColor: theme.palette.success.light,
        width: '100%',
        padding: '10px',
    },
    notDone: {
        backgroundColor: theme.palette.error.light,
        width: '100%',
        padding: '10px',
    },
    cardCharacteristics: {
        width: '50%',
        margin: '10px',
    },
}));
