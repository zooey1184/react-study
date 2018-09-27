// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'
// import Cool from './views/count'
//
// // React component
// class Counter extends Component {
//   constructor() {
//     super()
//     this.state = {
//       val: 'hello'
//     }
//   }
//   render() {
//     const { value, onIncreaseClick } = this.props
//     return (
//       <div>
//         <span>{value}</span>
//         <button onClick={onIncreaseClick}>Increase</button>
//         <Cool val={this.state.val}/>
//       </div>
//     )
//   }
// }
//
// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }
//
// // Action
// const increaseAction = { type: 'increase' }
//
// // Reducer
// function counter(state = { count: 0 }, action) {
//   const count = state.count
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 }
//     default:
//       return state
//   }
// }
//
// // Store
// const store = createStore(counter)
//
// // Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }
//
// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }
//
// // Connected Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)
//
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

import React from 'react'
import App from './container/index'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import re from './reducer'

const store = createStore(re)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
