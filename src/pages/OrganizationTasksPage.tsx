import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { OrganizationTask } from '../graphql/types';
import Page from './Page';

const GET_ORGANIZATION_TASKS_QUERY = loader('src/graphql/queries/organization-tasks.graphql');

export default function OrganizationTasksPage() {
    const { loading, data, error } = useQuery(GET_ORGANIZATION_TASKS_QUERY);

    if (loading) {
        return <Skeleton animation="wave" variant="rect" height="70vh" width="40vw" />;
    }
    if (error) {
        return <Typography variant="h6">Oooops! Something went wrong</Typography>;
    }

    if (!data?.organizationTasks) {
        return <Typography variant="h6">Sorry, no data found.</Typography>;
    }

    return (
        <Page title="Organization Tasks">
            {data.organizationTasks.map((task: OrganizationTask) => (
                <Box key={task.id} width="40vw" my={1}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">{task.title}</Typography>
                            <Typography variant="body1">{task.description}</Typography>
                        </CardContent>
                        <Box bgcolor={task.isDone ? 'lightGreen' : 'pink'} height="50px" p={1.5}>
                            <Typography align="center">{task.isDone ? 'Task is done' : 'Task to be taken'}</Typography>
                        </Box>
                    </Card>
                </Box>
            ))}
        </Page>
    );
}
