'use strict';
import React from 'react';
import TodoInput from './TodoInputComponent';
import TodoActions from '../Actions/TodoActions';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <h1>todos</h1>
                <TodoInput
                    id="new-todo"
                    placeholder="What needs to be done?"
                    onSave={this._onSave}
                    />
            </header>
        );
    }
    _onSave(text) {
        if (text.trim()){
            TodoActions.create(text);
        }
    }
}

export default Header;