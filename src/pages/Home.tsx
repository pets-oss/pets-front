import React from 'react';

import { Fade } from '@material-ui/core';
import AppLogoHeader from '../components/layout/AppLogoHeader';
import RecentAnimalsContainer from '../components/layout/RecentAnimalsContainer';
import RecentEventsContainer from '../components/layout/RecentEventsContainer';
import Page from './Page';

function Home() {
    return (
        <Fade in timeout={600}>
            <div>
                <Page>
                    <AppLogoHeader />
                    <RecentAnimalsContainer />
                    <RecentEventsContainer />
                </Page>
            </div>
        </Fade>
    );
}

export default Home;
