import { loader } from 'graphql.macro';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { screen } from '@testing-library/react';
import { renderWithMockProvider } from '../test-utils/render-mock-provider';
import OrganizationTasksPage from './OrganizationTasksPage';

jest.mock('@material-ui/lab/Skeleton', () => () => <div>Loading...</div>);

const GET_ORGANIZATION_TASKS_QUERY = loader('src/graphql/queries/organization-tasks.graphql');

test('should have loading state', () => {
    renderWithMockProvider(<OrganizationTasksPage />, { query: GET_ORGANIZATION_TASKS_QUERY });
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test('should handle error state', async () => {
    renderWithMockProvider(<OrganizationTasksPage />, {
        query: GET_ORGANIZATION_TASKS_QUERY,
        error: new Error('Something went wrong'),
    });
    // Wait for the application to update
    await act(async () => new Promise(resolve => setTimeout(resolve, 0)));
    expect(screen.getByText(/Error!/i)).toBeInTheDocument();
});

test('should load organization task list', async () => {
    renderWithMockProvider(<OrganizationTasksPage />, {
        query: GET_ORGANIZATION_TASKS_QUERY,
        data: {
            organizationTasks: [
                {
                    id: 1,
                    title: 'Vet for Murkė',
                    description: 'Place: Kaunakiemio g. 15a',
                    isDone: false,
                },
            ],
        },
    });
    // Wait for the application to update
    await act(async () => new Promise(resolve => setTimeout(resolve, 0)));
    expect(screen.getByText(/Organization Tasks/i)).toBeInTheDocument();
});
