import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';

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

class ToNext extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.nextFn = this.nextFn.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.state = {
      redirect: false
    }
  }
  nextFn() {
    this.setState({
      redirect: true
    })
  }

  handleOnClick(){
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/list" />
    }else {
      return (
        <div>
          <p>{this.props.count}</p>
          <button onClick={this.props.onIncreaseClick}>plus</button>
          <button onClick={this.nextFn}>netx</button>
        </div>
      )
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ToNext)

export default App
