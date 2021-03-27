import React from 'react';

import AppLogoHeader from '../components/layout/AppLogoHeader';
import RecentAnimalsContainer from '../components/layout/RecentAnimalsContainer';
import RecentEventsContainer from '../components/layout/RecentEventsContainer';
import Page from './Page';

function Home() {
    return (
        <Page>
            <AppLogoHeader />
            <RecentAnimalsContainer />
            <RecentEventsContainer />
        </Page>
    );
}

export default Home;
