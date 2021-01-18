import React from 'react';

import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TodayIcon from '@material-ui/icons/Today';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        avatar: {
            color: 'white',
            background: theme.palette.secondary.light,
        },
        inline: {
            display: 'inline',
        },
    })
);

function EventList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {[0, 1, 2, 3].map((item: number, index: number) => {
                return (
                    <>
                        {index !== 0 ? <Divider component="li" /> : null}
                        <ListItem key={item} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <TodayIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={`Type / Name-${item}`}
                                secondary={
                                    <>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            2021-01-02 by AuthorName
                                        </Typography>
                                        {
                                            ' — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…'
                                        }
                                    </>
                                }
                            />
                        </ListItem>
                    </>
                );
            })}
        </List>
    );
}

export default EventList;
