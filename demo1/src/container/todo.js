import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state)=> {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onIncreaseClick: () => dispatch({type: "ADD"})
  }
}

const Todo = ({count, onIncreaseClick})=> {
  return (
    <div onClick={onIncreaseClick}>
      {count}
      <button onClick={onIncreaseClick}>plus</button>
    </div>
  )
}

const App = connect(mapStateToProps, mapDispatchToProps)(Todo)

export default App
