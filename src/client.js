import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Root from 'containers/index';
import 'styles/main.scss';

const app = document.getElementById('react-root');
const store = configureStore();
const component = (
    <Provider store={ store }>
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(component, app);