import TodoConstants from '../Constatnts/TodoConstants';

var TodoActions = {
    create: function(text) {
        return {
            type: TodoConstants.TODO_CREATE,
            text: text
        };
    },

    updateText: function(id, text) {
        return {
            type: TodoConstants.TODO_UPDATE_TEXT,
            id: id,
            text: text
        };
    },

    toggleComplete: function(todo) {
        var id = todo.id;
        var type = todo.complete ?
            TodoConstants.TODO_UNDO_COMPLETE :
            TodoConstants.TODO_COMPLETE;

        return {
            type: type,
            id: id
        };
    },

    toggleCompleteAll: function() {
        return {
            type: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
        };
    },

    destroy: function(id) {
        return {
            type: TodoConstants.TODO_DESTROY,
            id: id
        };
    },

    destroyCompleted: function() {
        return {
            type: TodoConstants.TODO_DESTROY_COMPLETED
        };
    }
};

export default TodoActions;

