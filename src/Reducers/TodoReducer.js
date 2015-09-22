'use strict';
import { combineReducers } from 'redux';
import TodoConstants from '../Constatnts/TodoConstants';
import assign from 'object-assign';

const initialState = [];

function todo(state = initialState, action = {}) {
    switch (action.type) {
        case TodoConstants.TODO_CREATE:
            return [{
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                completed: false,
                text: action.text
            }, ...state];

        case TodoConstants.TODO_COMPLETE:
            return state.map(todo =>
                    todo.id === action.id ?
                        assign({}, todo, { completed: !todo.completed }) :
                        todo
            );

        case TodoConstants.TODO_DESTROY:
            return state.filter(todo =>
                todo.id !== action.id
            );

        case TodoConstants.TODO_DESTROY_COMPLETED:
            return state.filter(todo => todo.completed === false);

        case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
            const areAllMarked = state.every(todo => todo.completed);
            return state.map(todo => assign({}, todo, {
                completed: !areAllMarked
            }));

        case TodoConstants.TODO_UNDO_COMPLETE:
            return state.filter(todo => todo.completed === false);

        case TodoConstants.TODO_UPDATE_TEXT:
            return state.map(todo =>
                    todo.id === action.id ?
                        assign({}, todo, { text: action.text }) :
                        todo
            );

        default:
            return state;
    }
}

const todoReducer = combineReducers({
    todo
});

export default todoReducer;