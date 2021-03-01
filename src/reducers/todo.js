import { ADD_TODO } from '../actions/ACTIONS';

export default (state = [], action) => {
    switch (action.type) {
     case ADD_TODO:
      return state.concat(action.todo)
     default:
      return state
    }
   }