import { ADD_TODO, REMOVE_TODO } from '../actions/todoAction';
import Todo from '../models/todo';

function todoReducer(state = [], action) {  
  switch(action.type) {
      case ADD_TODO:
        const newTodo = new Todo(
          state.length + 1,
          action.todoTitle
        );

        return [
          ...state, newTodo
        ];

      case REMOVE_TODO:
        return state; 

      default:
        return state;
  }
}

export default todoReducer;