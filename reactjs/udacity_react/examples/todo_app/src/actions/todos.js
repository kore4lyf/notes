import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'


function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function handleAddTodo (name, cb) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo))
        cb()
      })
      .catch(() => alert('Error, item not add. Try again!'))
  }
}

export function handleDeleteTodo(item) {
  return (dispatch) => {
    // Optimistically Deleting Items
    dispatch(removeTodo(item.id))
    
    return API.deleteTodo(item.id)
    .catch(() => {
      dispatch(addTodo(item))
      alert(`An error occured. ${item.name} was not deleted.`)
    })
  }
}


export function handleToggle(itemId) {
  return (dispatch) => {
    dispatch(toggleTodo(itemId))
        
    return API.saveTodoToggle()
      .catch(() => {
        dispatch(toggleTodo(itemId))
        alert("Error on complete. Try again!")
    })
  }
}