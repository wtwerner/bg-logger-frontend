import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Auth0Provider } from '@auth0/auth0-react';

const history = createBrowserHistory();

ReactDOM.render(
    <Auth0Provider
        domain="bg-logger.us.auth0.com"
        clientId="1Lj17i9tfiW5zDV9krgDVbzXWpFLkquJ"
        redirectUri={window.location.origin}
    >
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </Auth0Provider>,

    document.getElementById('root')
);
