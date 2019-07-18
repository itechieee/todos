import React, {Component} from 'react';
import TodoItem from './TodoItem/todoItemComponent';
import { connect } from 'react-redux';
import { loadTodo } from '../../../actions/todoAction';

class TodoList extends Component {
    componentDidMount() {
      this.props.getTodo();
    }
  
    render() {
      const {todos} = this.props;
      if(todos.length === 0) {
        return (
        <div>
          No todo found
        </div>
        )
      }
      return (
        <table className="table items">
         <thead>
                <tr>
                    <th scope="col">Remember to ...</th>
                </tr>
            </thead>
            <tbody>
          { todos.map( todoObj =>  <TodoItem key={todoObj.id} todo={todoObj} /> ) }
          </tbody>
        </table>
      );
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodo: () => {
      dispatch(loadTodo());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
