'use strict';
//require('./assets/base.css');
import MainCss from './Assets/base.css';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './Stores/configureStore';
import Board from './Components/BoardComponent'

const store = configureStore();

React.render(
    <Provider store={store}>
        {() => <Board />}
    </Provider>,
    document.getElementById('react-redux-todo')
);