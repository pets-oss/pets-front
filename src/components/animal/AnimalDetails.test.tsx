import { loader } from 'graphql.macro';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { screen, waitFor } from '@testing-library/react';
import { renderWithMockProvider } from '../../test-utils/render-mock-provider';
import AnimalDetails from './AnimalDetails';

jest.mock('@material-ui/lab/Skeleton', () => () => <div>Loading...</div>);
jest.mock('../form/SelectFilesDialog', () => () => <div>SelectFilesDialog</div>);

const GET_ANIMAL_DETAILS = loader('../../graphql/queries/animal-details.graphql');

// https://github.com/apollographql/apollo-client/issues/6803 MockedProvider issue
jest.mock('@apollo/client', () => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...jest.requireActual('@apollo/client'),
    useQuery: (query, options) =>
        jest.requireActual('@apollo/client').useQuery(query, {
            ...options,
            fetchPolicy: 'no-cache',
        }),
}));

const mockedData = {
    animal: {
        id: 1,
        name: 'Jupyter',
        imageUrl: 'https://picsum.photos/id/237/300/300',
        details: {
            birthDate: '1577836800000',
            breed: {
                value: 'Labrador',
            },
            color: {
                value: 'Black',
            },
            gender: 'Male',
            weight: 1,
        },
    },
};

describe('AnimalDetails', () => {
    test('should have loading state and load data', async () => {
        renderWithMockProvider(
            <MemoryRouter initialEntries={['animal/1']}>
                <Route path="animal/:id">
                    <AnimalDetails />
                </Route>
            </MemoryRouter>,
            { query: GET_ANIMAL_DETAILS, variables: { id: 1 }, data: mockedData }
        );

        expect(screen.getByText(/Loading.../)).toBeInTheDocument();

        await waitFor(() => expect(screen.getAllByText(/Labrador/i)).toHaveLength(2));
        await waitFor(() => expect(screen.getAllByText(/Black/i)).toHaveLength(2));
        await waitFor(() => expect(screen.getAllByText(/Weight/i)).toHaveLength(1));
    });
});
