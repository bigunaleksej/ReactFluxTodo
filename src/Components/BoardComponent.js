'use strict';
import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import TodoList from './TodoListComponent';
import TodoStore from '../Stores/TodoStore';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getTodoState();
    }

    getTodoState() {
        return {
            allTodos: TodoStore.getAll(),
            areAllComplete: TodoStore.areAllComplete()
        };
    }

    componentDidMount() {
        TodoStore.addChangeListener(() => { this._onChange() });
    }

    render() {
        return (
            <div>
                <Header />
                <TodoList
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                    />
                <Footer
                    allTodos={this.state.allTodos}
                    />
            </div>
        );
    }
    _onChange() {
        this.setState(this.getTodoState());
    }
}

export default Board;