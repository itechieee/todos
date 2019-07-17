import React from 'react';
import TodoItem from './TodoItem/todoItemComponent';
import { connect } from 'react-redux';

function TodoList(props) {
  const {todos} = props;

  if(todos.length === 0) {
    return (
    <div>
      No todo found
    </div>
    )
  }
  return (
    <div>
       { todos.map( todoObj =>  <TodoItem key={todoObj.id} todo={todoObj} /> ) }
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos
    }
};
export default connect(mapStateToProps)(TodoList);
