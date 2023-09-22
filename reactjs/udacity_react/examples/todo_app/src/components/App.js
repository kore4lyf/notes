import React from 'react'
import ConnectedTodos from './todos'
import ConnectedGoals from './goals'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends React.Component{

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  
  render(){
    console.log('store App: ', this.props.store)
    return(
      <div>
        <h1> MyApp </h1>   
        <ConnectedTodos/>
        <ConnectedGoals/>
      </div>
    )
  }
  
}

export default connect((state) =>({
  store: state
}))(App)
