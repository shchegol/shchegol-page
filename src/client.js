import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from 'store/store';

import Card from './layouts/Card';
import './styles/main.scss';

const app = document.getElementById('react-root');

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Card/>
        </BrowserRouter>
    </Provider>
), app);