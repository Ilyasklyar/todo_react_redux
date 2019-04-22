import React from 'react';
import './TodoItem.css';
import { deleteTodoActionCreator } from '../redux/todo-reducer';

const TodoItem = (props) => {

    let deleteTodo = (e) => {
        props.store.dispatch(deleteTodoActionCreator(e));
    };
    let state = props.store.getState().todoPage;

    return (
        <div className="App">
            <ul>
                {state.todoItems.map(i => (
                    <li key={i.id} >
                        <span className="item">{i.todo}</span>
                        <span className="del" onClick={() => deleteTodo(i)}>X</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoItem;
