import React from 'react';

import { Box } from '@material-ui/core';
import { OrganizationTask } from '../../graphql/types';
import TaskCard from './TaskCard';

interface TaskListProps {
    tasks: OrganizationTask[];
}

export default function TaskList({ tasks }: TaskListProps) {
    return (
        <Box component="ul">
            {tasks.map(task => (
                <TaskCard task={task} key={task.id} />
            ))}
        </Box>
    );
}
