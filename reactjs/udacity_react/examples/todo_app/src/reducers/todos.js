import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../actions/todos'

import { RECIEVE_DATA } from '../actions/shared'

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo)
    
    case REMOVE_TODO:
      console.log('hey')
      return state.filter(todoItem => todoItem.id !== action.id)
    
    case TOGGLE_TODO:
      return state.map(todoItem =>
        todoItem.id === action.id ?
          Object.assign({}, todoItem, { complete: !todoItem.complete }) :
          todoItem)

    case RECIEVE_DATA: 
      return action.todos

    default:
      return state
  }
}