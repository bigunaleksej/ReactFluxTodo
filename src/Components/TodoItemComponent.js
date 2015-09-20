'use strict';
import React from 'react';
import TodoInput from './TodoInputComponent';
import TodoActions from '../Actions/TodoActions';
import classNames from 'classnames';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    render() {
        var todo = this.props.todo,
            classNameString = classNames({
                'completed': todo.complete,
                'editing': this.state.isEditing
            }),
            input;

        if (this.state.isEditing) {
            input =
                <TodoInput
                    className="edit"
                    onSave={this._onSave}
                    value={todo.text}
                    />;
        }

        return (
            <li
                className={classNameString}
                key={todo.id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => { this._onToggleComplete() }}
                        />
                    <label onDoubleClick={() => { this._onDoubleClick() }}>
                        {todo.text}
                    </label>
                    <button
                        className="destroy"
                        onClick={() => { this._onDestroyClick() }} />
                </div>
                {input}
            </li>
        );
    }

    _onToggleComplete() {
        TodoActions.toggleComplete(this.props.todo);
    }

    _onDoubleClick() {
        this.setState({isEditing: true});
    }

    _onSave(text) {
        TodoActions.updateText(this.props.todo.id, text);
        this.setState({isEditing: false});
    }

    _onDestroyClick() {
        TodoActions.destroy(this.props.todo.id);
    }
}

export default TodoItem;