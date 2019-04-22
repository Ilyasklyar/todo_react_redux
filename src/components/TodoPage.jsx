import React from 'react';
import TodoItem from './TodoItem';
import './TodoPage.css';
import { updateNewTodoTextActionCreator, addTodoActionCreator } from '../redux/todo-reducer';


const TodoPage = (props) => {

  let state = props.store.getState().todoPage;
  let todoElements = <TodoItem store={props.store} />;
  let newTodoText = state.newTodoText;

  let onTodoChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewTodoTextActionCreator(body));
  };
  let addTodoItem = () => {
    props.store.dispatch(addTodoActionCreator());
  };

  return (
    <div className="todo-list">
      <h3>My ToDo List</h3>
      <div>
        <div>
          <textarea onChange={onTodoChange} value={newTodoText} className='text' />
        </div>
        <div>
          <button onClick={addTodoItem} className='btn'>Add todo</button>
        </div>
      </div>
      <div>
        {todoElements}
      </div>
    </div>
  );
}

export default TodoPage;
