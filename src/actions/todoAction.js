import { apiTodoUrl } from '../config/setting';
import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const LOAD_TODO = 'LOAD_TODO';
export const todosLoaded = (todos) => {
  return {
      type: LOAD_TODO,
      todos
  }
}

export const loadTodo = () => {
    return (dispatch) => {
      axios.get(apiTodoUrl)
        .then((result) => {
          dispatch(todosLoaded(result.data));
          // dipatch({
          //   type: LOAD_TODO,
          //   todos: result.data
          // });
        })
        .catch((error) => {
          console.log(error);
        });
    }      
}

export const addTodo = (todoTitle) => ({
  type: ADD_TODO,
  todoTitle
});


export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});