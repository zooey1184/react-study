import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from './list'

class Cool extends Component {
  static contextTypes = {
    // color: PropTypes.string,
    store: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // console.log(this.context.store.getState());
    console.log(this.props);
    this.setState({
      count: this.state.count+2
    })
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.count}
        <List />
      </div>
    )
  }
}
export default Cool
