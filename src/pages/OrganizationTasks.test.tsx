import { loader } from 'graphql.macro';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { screen } from '@testing-library/react';
import { renderWithMockProvider } from '../test-utils/render-mock-provider';
import OrganizationTasksPage from './OrganizationTasksPage';

jest.mock('@material-ui/lab/Skeleton', () => () => <div>Loading...</div>);
const GET_ORGANIZATION_TASKS = loader('../graphql/queries/organization-tasks.graphql');
test('should have loading state', () => {
    renderWithMockProvider(<OrganizationTasksPage />, { query: GET_ORGANIZATION_TASKS });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
});
test('should handle error state', async () => {
    renderWithMockProvider(<OrganizationTasksPage />, {
        query: GET_ORGANIZATION_TASKS,
        error: new Error('Something went wrong'),
    });
    // Wait for the application to update
    await act(async () => new Promise(resolve => setTimeout(resolve, 0)));
    expect(screen.getByText('Oooops! Something went wrong')).toBeInTheDocument();
});
test('should load organization tasks', async () => {
    renderWithMockProvider(<OrganizationTasksPage />, {
        query: GET_ORGANIZATION_TASKS,
        data: {
            organizationTasks: [
                { title: 'Organiz', id: 1, description: 'This is description', organization: 2, isDone: true },
            ],
        },
    });
    // Wait for the application to update
    await act(async () => new Promise(resolve => setTimeout(resolve, 0)));
    expect(screen.getByText('Organiz')).toBeInTheDocument();
    expect(screen.getByText('This is description')).toBeInTheDocument();
    expect(screen.getByText('Task is done')).toBeInTheDocument();
});
test('should load organization tasks without title', async () => {
    renderWithMockProvider(<OrganizationTasksPage />, {
        query: GET_ORGANIZATION_TASKS,
        data: {
            organizationTasks: [
                { title: '', id: 1, description: 'This is description', organization: 2, isDone: true },
            ],
        },
    });
    // Wait for the application to update
    await act(async () => new Promise(resolve => setTimeout(resolve, 0)));
    expect(screen.getByText('This is description')).toBeInTheDocument();
    expect(screen.getByText('Task is done')).toBeInTheDocument();
});
