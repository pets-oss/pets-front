import React from 'react';

import {
    Avatar,
    Divider,
    fade,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Theme,
    Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TodayIcon from '@material-ui/icons/Today';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        item: {
            backgroundColor: fade(theme.palette.background.paper, 0.4),
        },
        avatar: {
            color: theme.palette.secondary.contrastText,
            background: theme.palette.secondary.light,
        },
        inline: {
            display: 'inline',
        },
    })
);

function AnimalEventList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {[0, 1, 2, 3].map((item: number, index: number) => {
                return (
                    <div key={`event-list${item}`}>
                        {index !== 0 ? <Divider component="li" /> : null}
                        <ListItem className={classes.item} alignItems="flex-start">
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
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textSecondary"
                                        >
                                            {
                                                ' — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…'
                                            }
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    </div>
                );
            })}
        </List>
    );
}

export default AnimalEventList;
