import { combineReducers } from 'redux'
import count from './add'
// const re = (state = { count: 0 }, action)=> {
//   const count = state.count
//   switch (action.type) {
//     case 'ADD':
//       return { count: count + 5 }
//     case 'CUT':
//       return { count: count - 5 }
//     default:
//       return state
//   }
// }
// export default re

export default combineReducers({
  count// 指代state.count
})
