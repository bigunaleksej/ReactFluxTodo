'use strict';
import React from 'react';
import TodoInput from './TodoInputComponent';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <h1>todos</h1>
                <TodoInput
                    id="new-todo"
                    placeholder="What needs to be done?"
                    onSave={(text) => { this._onSave(text) }}
                    />
            </header>
        );
    }

    _onSave(text) {
        if (text.trim()) {
            this.props.addTodo(text);
        }
    }
}

export default Header;