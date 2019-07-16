import React from 'react';

import TodoItem from './TodoItem/todoItemComponent';

function TodoList(props) {
  const {todos} = props;
  return (
    <div>
       { todos.map( todoObj =>  <TodoItem key={todoObj.id} todo={todoObj} /> ) }
    </div>
  );
}

export default TodoList;
