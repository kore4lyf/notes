import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': 
      return { count: state.count + 1 }
    case 'DECREMENT': 
      return { count: state.count - 1 }
    default: 
      return state
  }
}

const initialState = { count: 0 }

function UseReducerEx1() {
  const [{ count }, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h3>Example 1: </h3>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Inc +</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Dec -</button>
      <br />
      <p>{count}</p>
    </div>
  )
}

export default UseReducerEx1;