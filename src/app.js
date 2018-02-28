/**
 * Created by jiang on 2017/7/3.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient.js';

const root = document.getElementById('root');
const store = createStore(new ApiClient());

if (__DEVELOPMENT__ && !window.devToolsExtension) {
    const DevTools = require('./components/DevTools/DevTools');
    render(
        <Provider store={store} key="provider">
            <div>
                <Routes />
                <DevTools />
            </div>
        </Provider>, root
    );
}

if (!__DEVELOPMENT__) {
    render(
        <Provider store={store} key="provider">
            <Routes />
        </Provider>, root
    );
}
