export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todoTitle) => ({
  type: ADD_TODO,
  todoTitle
});


export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});