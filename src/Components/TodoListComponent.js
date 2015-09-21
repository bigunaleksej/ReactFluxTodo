'use strict';
import React from 'react';
import TodoItem from './TodoItemComponent';

class TodoList extends React.Component {
    render() {
        var allTodos = this.props.todo,
            todos = [];

        if (Object.keys(allTodos).length < 1) {
            return null;
        }

        for (var key in allTodos) {
            todos.push(
                <TodoItem
                    key={key}
                    todo={allTodos[key]}
                    actions={this.props.actions}
                    />
            );
        }

        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={() => { this._onToggleCompleteAll() }}
                    checked={this.props.areAllComplete ? 'checked' : ''}
                    />
                <ul id="todo-list">{todos}</ul>
            </section>
        );
    }
    _onToggleCompleteAll() {
        this.props.actions.toggleCompleteAll();
    }
}

export default TodoList;