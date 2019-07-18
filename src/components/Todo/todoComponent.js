import React from 'react';
import TodoForm from './TodoForm/todoFormComponent';
import TodoList from './TodoList/todolistComponent';

function TodoComponent(props) {
      return (
        <div id="todo-container">
          <TodoForm />
          <TodoList />
        </div>
      );
}

export default TodoComponent;
