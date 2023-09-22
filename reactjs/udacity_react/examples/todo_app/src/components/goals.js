import React from 'react'
import { connect } from 'react-redux'
import List from './list'
import {
  handleAddGoal
} from "../actions/goals"

class Goals extends React.Component {
  addGoal = () => {
    const { dispatch } = this.props
    const name = this.input.value 
    dispatch(handleAddGoal(
      name, 
      () => this.input.value = ''
    ))
  }
  
  render() {

    const { dispatch } = this.props
    return (
      <div>
        <h2> Goals </h2>
        <input type='text' placeholder='Goal' ref={input => this.input = input}/> 
        <button onClick={this.addGoal}>Add Goal</button>
        <List dispatch={dispatch} store={this.props.store} type='goals'/>
      </div>
    )
  }
}


export default connect((state) =>({
  store: state
}))(Goals)