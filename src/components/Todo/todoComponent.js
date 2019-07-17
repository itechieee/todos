import React from 'react';
import TodoForm from './TodoForm/todoFormComponent';
import TodoList from './TodoList/todolistComponent';

function TodoComponent(props) {
      return (
        <div>
          <TodoForm />
          <TodoList />
        </div>
      );
}

export default TodoComponent;
