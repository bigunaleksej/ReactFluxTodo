'use strict';
import React from 'react';
import TodoInput from './TodoInputComponent';
import classNames from 'classnames';

class TodoItem extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.state = {
            isEditing: false
        };
    }

    render() {
        var todo = this.props.todo,
            classNameString = classNames({
                'completed': todo.completed,
                'editing': this.state.isEditing
            }),
            input;

        if (this.state.isEditing) {
            input =
                <TodoInput
                    className="edit"
                    onSave={(text) => this._onSave(text) }
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
                        checked={todo.completed}
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
        this.props.actions.toggleComplete(this.props.todo);
    }

    _onDoubleClick() {
        this.setState({isEditing: true});
    }

    _onSave(text) {
        this.props.actions.updateText(this.props.todo.id, text);
        this.setState({isEditing: false});
    }

    _onDestroyClick() {
        this.props.actions.destroy(this.props.todo.id);
    }
}

export default TodoItem;