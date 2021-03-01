import { ADD_TODO } from './ACTIONS';

export const addTodo = todo => {
    return {
      type: ADD_TODO,
      todo,
    }
  }