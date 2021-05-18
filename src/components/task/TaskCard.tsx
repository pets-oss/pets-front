import React from 'react';

import { Box, Card, CardHeader, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { OrganizationTask } from '../../graphql/types';

const DONE = 'Task is done';
const TODO = 'Task to be taken';

export default function TaskCard({ task }: TaskCardProps) {
    const classes = useStyles();

    return (
        <Box my={2}>
            <Card>
                <CardHeader
                    title={
                        <Typography component="h6" className={classes.headerText} noWrap>
                            {task.title}
                        </Typography>
                    }
                    subheader={<Typography className={classes.subHeaderText}>{task.description}</Typography>}
                />
                <Box display="flex" className={task.isDone ? classes.done : classes.todo}>
                    <Box my={1} mx="auto" py={1} color="white">
                        {task.isDone ? DONE : TODO}
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
    },
    headerText: {
        maxWidth: 150,
        [theme.breakpoints.up('md')]: {
            maxWidth: 350,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 600,
        },
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 600,
    },
    done: {
        color: theme.palette.success.contrastText,
        backgroundColor: theme.palette.success.main,
    },
    todo: {
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.contrastText,
    },
    subHeaderText: {
        color: theme.palette.grey['600'],
    },
}));

interface TaskCardProps {
    task: OrganizationTask;
}
