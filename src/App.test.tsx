import React from 'react';

import { screen, waitFor } from '@testing-library/react';
import App from './App';
import renderWithRouter from './test-utils/RenderWithRouter';

const mockedComponent = () => <></>;
jest.mock('./components/layout/RecentAnimalsContainer', () => mockedComponent);
jest.mock('./components/layout/RecentEventsContainer', () => mockedComponent);

test('full app rendering/navigating', async () => {
    // Home page
    renderWithRouter(<App />);
    await waitFor(() => {
        expect(screen.getByText(/Pets information system/i)).toBeInTheDocument();
    });

    // todo - testing router on responsive cases
    // test needs to be set with certain media
    // https://material-ui.com/components/use-media-query/#testing

    /*
      // navigation to About page
      const leftClick = { button: 0 }
      userEvent.click(screen.getByText(/About/i), leftClick)

      expect(screen.getByTestId('location-display')).toHaveTextContent('/about')
      */
});

test('landing on a bad page', async () => {
    renderWithRouter(<App />, { route: '/not-found' });

    await waitFor(() => {
        expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    });
});
