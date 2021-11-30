import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { styled, Typography } from '@mui/material';
import LayoutAlignCenterBox from '../components/layout/LayoutAlignCenterBox';
import Page from './Page';

const PREFIX = 'UserProfile';

const classes = {
    infoContainer: `${PREFIX}-infoContainer`,
    avatar: `${PREFIX}-avatar`,
};

const StyledPage = styled(Page)(({ theme }) => ({
    [classes.infoContainer]: {
        paddingBottom: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    [classes.avatar]: {
        marginBottom: theme.spacing(1),
        borderRadius: '50%',
        border: `1px solid ${theme.palette.secondary.main}`,
    },
}));

function UserProfile() {
    const { user, isLoading } = useAuth0();
    if (!user || isLoading) {
        return null;
    }

    return (
        <StyledPage title="User preferences">
            <LayoutAlignCenterBox>
                <Typography component="div">
                    <div className={classes.infoContainer}>
                        <img alt="" src={user.picture} className={classes.avatar} />
                        <Typography variant="h4" component="p">
                            {user.name}
                        </Typography>
                        <Typography>{user.email}</Typography>
                    </div>
                    <div className={classes.infoContainer}>
                        <Typography variant="body1">User and Organization details</Typography>
                    </div>
                </Typography>
            </LayoutAlignCenterBox>
        </StyledPage>
    );
}

export default UserProfile;
