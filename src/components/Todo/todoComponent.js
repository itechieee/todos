import React from 'react';
import TodoForm from './TodoForm/todoFormComponent';
import TodoList from './TodoList/todolistComponent';
import Todo from '../../models/todo';

function TodoComponent(props) {

  const todos = [
    new Todo(1, 'aaaaa'),
    new Todo(2, 'bbbbb'),
    new Todo(3, 'ccccc'),
    new Todo(4, 'ddddd')
  ];

  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoComponent;
