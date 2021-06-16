import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Auth0ProviderWithHistory from './utils/auth/Auth0ProviderWithHistory';
import AuthorizedApolloProvider from './utils/AuthorizedApolloProvider';
import { OutdatedPageContextProvider } from './utils/OutdatedPageContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0ProviderWithHistory>
                <AuthorizedApolloProvider>
                    <OutdatedPageContextProvider>
                        <App />
                    </OutdatedPageContextProvider>
                </AuthorizedApolloProvider>
            </Auth0ProviderWithHistory>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
