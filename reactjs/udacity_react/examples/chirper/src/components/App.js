import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          
        <LoadingBar />
        <div className='container'>
          
          {
            this.props.loading
            ? <p> Loading...</p>
            : <div>
                  <Nav />
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route path='/tweet/:id' element={<TweetPage />} />
                <Route path='/new' element={<NewTweet />} />
              </Routes>
              </div>
                    
          }
        </div>
          </Fragment>
      </Router>
    )
    //<TweetPage match={{ params: { id: '5c9qojr2d1738zlx09afby' } }} /> // <NewTweet /> //<Dashboard/>
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App)