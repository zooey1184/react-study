import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state)=> {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    cutClick: ()=> dispatch({type: 'CUT'})
  }
}

const Bb = ({count, cutClick})=> {
  return (
    <div>
      <button onClick={cutClick}>cut</button>
    </div>
  )
}

const Cut = connect(mapStateToProps, mapDispatchToProps)(Bb)
export default Cut
