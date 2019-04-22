import React from 'react';
import './App.css';
import TodoPage from './components/TodoPage'

const App = (props) => {
  return (
    <div className="App">
      <TodoPage store={props.store} />
    </div>
  );
}

export default App;
