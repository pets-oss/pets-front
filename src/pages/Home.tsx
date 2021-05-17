import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Fade } from '@material-ui/core';
import AppLogoHeader from '../components/layout/AppLogoHeader';
import RecentAnimalsContainer from '../components/layout/RecentAnimalsContainer';
import RecentEventsContainer from '../components/layout/RecentEventsContainer';
import Page from './Page';

function Home() {
    const { isAuthenticated } = useAuth0();

    return (
        <Fade in timeout={600}>
            <Page>
                <AppLogoHeader />
                {isAuthenticated && (
                    <>
                        <RecentAnimalsContainer />
                        <RecentEventsContainer />
                    </>
                )}
            </Page>
        </Fade>
    );
}

export default Home;
