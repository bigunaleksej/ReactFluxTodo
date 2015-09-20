import AppDispatcher from '../Dispatcher/AppDispatcher';
import TodoConstants from '../Constatnts/TodoConstants';

var TodoActions = {
    create: function(text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    },

    updateText: function(id, text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            id: id,
            text: text
        });
    },

    toggleComplete: function(todo) {
        var id = todo.id;
        var actionType = todo.complete ?
            TodoConstants.TODO_UNDO_COMPLETE :
            TodoConstants.TODO_COMPLETE;

        AppDispatcher.dispatch({
            actionType: actionType,
            id: id
        });
    },

    toggleCompleteAll: function() {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
        });
    },

    destroy: function(id) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        });
    },

    destroyCompleted: function() {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY_COMPLETED
        });
    }

};

export default TodoActions;

