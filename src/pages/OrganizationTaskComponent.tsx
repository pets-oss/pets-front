import React from 'react';

import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { OrganizationTask } from '../graphql/types';

export default function OrganizationTaskComponent({ organizationTasks }) {
    return (
        <div>
            {organizationTasks.map((task: OrganizationTask) => (
                <Box key={task.id} width="20vw" my={1}>
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
        </div>
    );
}
