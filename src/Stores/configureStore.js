'use strict';
import { createStore } from 'redux';
import todoReducer from '../Reducers/TodoReducer';

function configureStore(initialState) {
    const store = createStore(todoReducer, initialState);

    if (module.hot) {
        module.hot.accept('../Reducers/TodoReducer', () => {
            const nextReducer = require('../Reducers/TodoReducer');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default configureStore;