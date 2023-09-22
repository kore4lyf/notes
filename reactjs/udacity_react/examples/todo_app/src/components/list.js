import {
  handleToggle,
  handleDeleteTodo
} from "../actions/todos"

import { handleDeleteGoal } from "../actions/goals"

function List({ dispatch, store, type }) {
  const items = type === 'todos' ? store.todos : store.goals
  
  const toggleComplete = (itemId) => {
    dispatch(handleToggle(itemId))
  }

  const removeItem = (item) => {
    if(type === 'todos') dispatch(handleDeleteTodo(item))
    else dispatch(handleDeleteGoal(item))
  }
  

  const {loading} = store

  if(loading) return (<p> Loading... </p>)
  
  return (

    <ul>
      {items.map( item => (
        <li key={item.id} onClick={() => {type === 'todo' && toggleComplete(item.id)}}>
          <span style={{textDecoration: item.complete && 'line-through'}} onClick={() =>  toggleComplete(item.id) }>{item.name}</span>
          <button onClick={() => removeItem(item)}>x</button>
        </li>) )}
    </ul>
  )
}

export default List;