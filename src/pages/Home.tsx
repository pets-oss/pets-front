import React from 'react';

import { Grow } from '@material-ui/core';
import AppLogoHeader from '../components/layout/AppLogoHeader';
import RecentAnimalsContainer from '../components/layout/RecentAnimalsContainer';
import RecentEventsContainer from '../components/layout/RecentEventsContainer';
import Page from './Page';

function Home() {
    return (
        <Grow in timeout={800}>
            <div>
                <Page>
                    <AppLogoHeader />
                    <RecentAnimalsContainer />
                    <RecentEventsContainer />
                </Page>
            </div>
        </Grow>
    );
}

export default Home;
