import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import OrganizationTaskComponent from './OrganizationTaskComponent';
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
            <OrganizationTaskComponent organizationTasks={data.organizationTasks} />
        </Page>
    );
}
