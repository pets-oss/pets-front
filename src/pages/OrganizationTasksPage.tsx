import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Box, Card, CardContent, Theme, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Skeleton } from '@material-ui/lab';
import { OrganizationTask } from '../graphql/types';
import Page from './Page';

interface Response {
    organizationTasks: OrganizationTask[];
}

const GET_ORGANIZATION_TASKS_QUERY = loader('../graphql/queries/organization-tasks.graphql');

function OrganizationTasksPage() {
    const classes = useStyles();
    const { loading, error, data } = useQuery<Response>(GET_ORGANIZATION_TASKS_QUERY);

    if (loading) {
        return <Skeleton variant="rect" height={500} />;
    }

    if (error) {
        return (
            <Page>
                <Typography variant="h4" component="h1">
                    <Box fontWeight="fontWeightBold">Ooops! Something went wrong.</Box>
                </Typography>
            </Page>
        );
    }

    if (!data?.organizationTasks.length) {
        return (
            <Page>
                <Typography variant="h4" component="h1">
                    <Box fontWeight="fontWeightBold">Sorry, no data found.</Box>
                </Typography>
            </Page>
        );
    }

    return (
        <Page title="Organization Tasks">
            {data &&
                data.organizationTasks.map((task: OrganizationTask) => {
                    return (
                        <Card key={task.id} className={classes.root}>
                            <CardContent>
                                <Typography variant="body1">{task.title}</Typography>
                                <Typography variant="body1">{task.description}</Typography>
                            </CardContent>
                            <Box className={classes.isDone} bgcolor={task.isDone ? 'LightGreen' : 'Pink'}>
                                <Typography variant="body1">
                                    {task.isDone ? 'Task is done' : 'Task to be taken'}
                                </Typography>
                            </Box>
                        </Card>
                    );
                })}
        </Page>
    );
}

export default OrganizationTasksPage;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: 400,
        maxWidth: '100%',
        marginBottom: theme.spacing(2),
    },
    isDone: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        textAlign: 'center',
    },
}));
