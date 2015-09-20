'use strict';
import React from 'react';
import TodoActions from '../Actions/TodoActions';

class Footer extends React.Component {
    render() {
        var allTodos = this.props.allTodos,
            total = Object.keys(allTodos).length,
            completed = 0,
            clearCompletedButton,
            itemsLeftPhrase,
            itemsLeft ;

        if (total === 0) {
            return null;
        }

        for (var key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            }
        }

        if (!!completed) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={this._onClearCompletedClick}>
                    Clear completed ({completed})
                </button>;
        }

        itemsLeft = total - completed;
        if (itemsLeft === 1) {
            itemsLeftPhrase = '1 item left';
        } else {
            itemsLeftPhrase = itemsLeft + ' items left';
        }

        return (
            <footer id="footer">
                <span id="todo-count">
                  <strong> {itemsLeftPhrase} </strong>
                </span>
                {clearCompletedButton}
            </footer>
        );
    }

    _onClearCompletedClick() {
        TodoActions.destroyCompleted();
    }
}

export default Footer;