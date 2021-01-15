import { loader } from 'graphql.macro';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { screen } from '@testing-library/react';
import { renderWithMockProvider } from '../test-utils/render-mock-provider';
import AnimalList from './AnimalList';

const GET_ANIMALS_QUERY = loader('../graphql/queries/animal-list.graphql');

test('should have loading state', () => {
    renderWithMockProvider(<AnimalList />, { query: GET_ANIMALS_QUERY });
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test('should handle error state', async () => {
    renderWithMockProvider(<AnimalList />, { query: GET_ANIMALS_QUERY, error: new Error('Something went wrong') });
    // Wait for the application to update
    await act(async () => new Promise(resolve => setTimeout(resolve, 0)));
    expect(screen.getByText(/Error!/i)).toBeInTheDocument();
});

test('should load animals list', async () => {
    renderWithMockProvider(<AnimalList />, {
        query: GET_ANIMALS_QUERY,
        data: { animals: [{ id: 1, name: 'Commissar Rex' }] },
    });
    // Wait for the application to update
    await act(async () => new Promise(resolve => setTimeout(resolve, 0)));
    expect(screen.getByText(/AnimalList page/i)).toBeInTheDocument();
    expect(screen.getByText(/Commissar Rex/i)).toBeInTheDocument();
});
