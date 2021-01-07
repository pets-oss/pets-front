import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './test-utils/RenderWithRouter';
import App from './App';

test('full app rendering/navigating', () => {
  // Home page
  renderWithRouter(<App />)
  expect(screen.getByText(/Pets information system/i)).toBeInTheDocument()

  // todo - testing router on responsive cases
  // test needs to be set with certain media
  // https://material-ui.com/components/use-media-query/#testing

  /*
  // navigation to About page
  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/About/i), leftClick)

  expect(screen.getByTestId('location-display')).toHaveTextContent('/about')
  */
})

test('landing on a bad page', () => {
  renderWithRouter(<App />, { route: '/something-that-does-not-match' })

  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument()
})
