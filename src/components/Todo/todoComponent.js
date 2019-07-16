import React, { Component } from 'react';
import TodoForm from './TodoForm/todoFormComponent';
import TodoList from './TodoList/todolistComponent';
import Todo from '../../models/todo';

class TodoComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
                todos : [
                  new Todo(1, 'aaaaa'),
                  new Todo(2, 'bbbbb'),
                  new Todo(3, 'ccccc'),
                  new Todo(4, 'ddddd')
                ]
          }
  }

  addTodo = (todoTitle) => {
    const newTodo = new Todo(
      this.state.todos.length + 1,
      todoTitle
    );

    this.setState({
      todos: [
        ...this.state.todos, newTodo
      ]
    });
  }
  render() {
    const {todos} = this.state;
      return (
        <div>
          <TodoForm add={this.addTodo} />
          <TodoList todos={todos} />
        </div>
      );
  }
}

export default TodoComponent;
