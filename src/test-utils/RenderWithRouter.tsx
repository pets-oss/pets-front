import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return render(ui, { wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter> });
};

export default renderWithRouter;
