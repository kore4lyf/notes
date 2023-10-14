import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'FIELD_CHANGE': 
      return {
        ...state,
        [action.fieldName]: action.payload
      }
    case 'LOGIN':
      return {
        ...state,
        error: ''
      }
    case 'SUCCESS': 
      return {
        ...state,
        password: '',
        isLoggedIn: true
      }
    case 'ERROR':
      return {
        ...state, 
        error: 'Incorrect username or password'
      }
    case 'LOGOUT':
      return {
        ...state,
        username: '',
        password: '',
        isLoggedIn: false
      }
    default: 
      return state
  }
}

const initialState = {
  username: '',
  password: '',
  error: '',
  isLoggedIn: false
}

function UseReducerEx2() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { username, password, error, isLoggedIn } = state;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN' })

    if (username === 'dan' && password === '123') {
      dispatch({ type: 'SUCCESS' })
    } else {
      dispatch({ type: 'ERROR' })
    }
  }

  return (
    <div>
      { isLoggedIn ?
        <>
          <h4> Welcome <b style={{ color: 'green' }}>{username}</b> </h4>
          <button onClick={() => dispatch({type: 'LOGOUT'})}>Logout</button>
        </> :
        <div>
          <h3>Example 2: </h3>
          <form onSubmit={handleLogin}>
            username: <input type="text" onChange={(e) => dispatch({
              type: 'FIELD_CHANGE',
              fieldName: 'username',
              payload: e.target.value
            })} /> 
            <br/>
            password: <input type="password" onChange={(e) => dispatch({
              type: 'FIELD_CHANGE',
              fieldName: 'password',
              payload: e.target.value
            })} />
            <br/>
            <button type="submit">Login</button>
            <br/>
            {error && <div style={{ color: 'red'}}> {error} </div>}
          </form>

          <p> username: { username } </p>
          <p> password: { password } </p>
          <p> error: { error } </p>
          <p> isLoggedIn: { isLoggedIn.toString() } </p>
        </div>}
      
    </div>
  )
}

export default UseReducerEx2;