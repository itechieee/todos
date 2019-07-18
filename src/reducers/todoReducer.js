import { LOAD_TODO, ADD_TODO, REMOVE_TODO } from '../actions/todoAction';
import Todo from '../models/todo';

function todoReducer(state = [], action) {  
  switch(action.type) {

      case LOAD_TODO:
        return action.todos; 

      case ADD_TODO:
        return [
          ...state, action.todos
        ];

      case REMOVE_TODO:
        return state; 

      default:
        return state;
  }
}

export default todoReducer;