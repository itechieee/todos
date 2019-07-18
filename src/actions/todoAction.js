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

export const todosAdded = (todoTitle) => {
  return {
      type: ADD_TODO,
      todoTitle
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

export const addTodo = (todoTitle) => {
  return (dispatch) => {
    const data = {
      title: todoTitle,
      completed: false,
      date: new Date()
    };
    axios.post(apiTodoUrl, data)
      .then(() => {
        dispatch(loadTodo());
      })
      .catch((error) => {
        console.log(error);
      });
  }     
};


export const removeTodo = (id) => {
  return (dispatch) => {
    axios.delete(apiTodoUrl+'/'+id)
      .then(() => {
        dispatch(loadTodo());
      })
  }
};