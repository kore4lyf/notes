import React from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import middleware from './middleware'

const store = createStore(reducer, middleware)

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
  
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )