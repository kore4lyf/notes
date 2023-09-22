const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The state is: ', action.type)
    console.log('The current state before dispatch: ', store.getState())
  console.groupEnd()
  return next(action)
}


export default logger