import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class List extends Component {
  static contextTypes = {
    // color: PropTypes.string,
    store: PropTypes.object
  }
  constructor() {
    super()
    this.state = {
      kk: 1
    }
  }
  render() {
    console.log();
    return (
      <div>
        <div>{this.state.kk}</div>
        <div>{this.context.store.getState().count}</div>
      </div>
    )
  }
}
export default List
