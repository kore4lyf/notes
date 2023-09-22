import API from 'goals-todos-api'
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}


export function handleAddGoal (name, cb) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal))
        cb()
      })
      .catch(() => alert('Error, item not add. Try again!'))
  }
}



export function handleDeleteGoal(item) {
  return (dispatch) => {
    // Optimistically Deleting Items
    dispatch(removeGoal(item.id))
    
    return API.deleteGoal(item.id)
    .catch(() => {
      dispatch(addGoal(item))
      alert(`An error occured. ${item.name} was not deleted.`)
    })
  }
}