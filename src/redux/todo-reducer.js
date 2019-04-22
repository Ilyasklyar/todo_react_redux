const ADD_TODO = 'ADD-TODO';
const UPDATE_NEW_TODO_TEXT = 'UPDATE-NEW-TODO-TEXT';
const DELETE_TODO = 'DELETE-TODO';


let initialState = {
    todoItems: [
        { id: 0, todo: 'd' }
    ],
    newTodoText: '',
    current: 1
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            debugger;
            if (state.newTodoText.length > 0) {
                let newTodo = {
                    id: state.current++,
                    todo: state.newTodoText
                };
                state.todoItems.push(newTodo);
                state.newTodoText = '';
            }
            return state;
        case UPDATE_NEW_TODO_TEXT:
            state.newTodoText = action.body;
            return state;
        case DELETE_TODO:
            state.todoItems = state.todoItems.filter(e => e !== action.body);
            return state;
        default:
            return state;
    }
}
export const addTodoActionCreator = () => ({ type: ADD_TODO })
export const updateNewTodoTextActionCreator = (text) => ({ type: UPDATE_NEW_TODO_TEXT, body: text })
export const deleteTodoActionCreator = (text) => ({ type: DELETE_TODO, body: text })


export default todoReducer;