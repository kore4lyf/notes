import React from 'react'
import { connect } from 'react-redux'
import List from './list'
import {
  handleAddTodo
} from '../actions/todos'


class Todos extends React.Component {      
  addItem = () => {
    const { dispatch } = this.props
    const name = this.input.value 
    dispatch(handleAddTodo(
      name, 
      () => this.input.value = ''
      ))
    }
    
    render(){
      const { dispatch } = this.props 

      return (
        <div>
          <h2> Todos </h2>
          <input type='text' placeholder='Todo' ref={input => this.input = input}/>
          <button onClick={this.addItem}> Add Todo </button>
          <List dispatch={dispatch} store={this.props.store} type='todos'/>
        </div>
      )
    }
}


    
export default connect((state) =>({
  store: state
}))(Todos)


