import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Skeleton } from '@material-ui/lab';
import TaskList from './TaskList';

const GET_ORGANIZATION_TASKS_QUERY = loader('src/graphql/queries/organization-tasks.graphql');

export default function TaskListContainer() {
    const { loading, data, error } = useQuery(GET_ORGANIZATION_TASKS_QUERY);

    if (loading) {
        return <Skeleton animation="wave" variant="rect" height="70vh" />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }

    if (!data?.organizationTasks?.length) {
        // TODO: replace with proper UI elements
        return <p>No data!</p>;
    }

    return <TaskList tasks={data.organizationTasks} />;
}
