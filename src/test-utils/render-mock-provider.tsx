import { DocumentNode } from 'graphql';
import React from 'react';

import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import theme from '../theme';

interface MockOptions {
    query: DocumentNode;
    error?: Error;
    data?: any;
    variables?: any;
}

export function renderWithMockProvider(ui: any, { query, data, error, variables }: MockOptions) {
    const mock: MockedResponse = {
        request: { query },
    };

    if (variables) {
        mock.request.variables = variables;
    }

    if (data) {
        mock.result = { data };
    }

    if (error) {
        mock.error = error;
    }

    return render(ui, {
        wrapper: props => (
            <ThemeProvider theme={theme}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <MockedProvider {...props} mocks={[mock]} />
            </ThemeProvider>
        ),
    });
}
