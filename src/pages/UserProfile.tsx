import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles, Typography } from '@material-ui/core';
import Page from './Page';

const useStyles = makeStyles(theme => ({
    infoContainer: {
        paddingBottom: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        marginBottom: theme.spacing(1),
        borderRadius: '50%',
        border: `1px solid ${theme.palette.secondary.main}`,
    },
}));

function UserProfile() {
    const classes = useStyles();

    const { user, isLoading } = useAuth0();
    if (!user || isLoading) {
        return null;
    }

    return (
        <Page title="User preferences">
            <div className={classes.infoContainer}>
                <img alt="" src={user.picture} className={classes.avatar} />
                <Typography variant="h4" component="p">
                    {user.name}
                </Typography>
                <Typography>{user.email}</Typography>
            </div>
            <Typography variant="body1">User and Organization details</Typography>
        </Page>
    );
}

export default UserProfile;
