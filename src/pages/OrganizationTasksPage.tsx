import React from 'react';

import TaskListContainer from '../components/task/TaskListContainer';
import Page from './Page';

function OrganizationTasksPage() {
    return (
        <Page title="Organization Tasks">
            <TaskListContainer />
        </Page>
    );
}

export default OrganizationTasksPage;
