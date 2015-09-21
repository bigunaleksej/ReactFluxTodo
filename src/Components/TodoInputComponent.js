'use strict';
import React from 'react';

const ENTER_KEY_CODE = 13;

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ''
        };
    }

    render() {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onBlur={() => { this._save() }}
                onChange={(event) => { this._onChange(event) }}
                onKeyDown={(event) => { this._onKeyDown(event) }}
                value={this.state.value}
                autoFocus={true}
                />
        );
    }

    _save() {
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        });
    }

    _onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    _onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    }
}

export default TodoInput;