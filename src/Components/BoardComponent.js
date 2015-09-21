'use strict';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import TodoList from './TodoListComponent';
import TodoActions from '../Actions/TodoActions'

class Board extends React.Component {
    render() {
        const { todo, dispatch } = this.props;
        const actions = bindActionCreators(TodoActions, dispatch);

        return (
            <div>
                <Header addTodo={actions.create} />
                <TodoList todo={todo} actions={actions} />
                <Footer todo={todo} actions={actions} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todo
    };
}

export default connect(mapStateToProps)(Board);