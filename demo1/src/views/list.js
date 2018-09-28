import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button,Notification } from 'element-react';

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
    this.open2 = this.open2.bind(this)
  }
  goBack() {
    window.history.back()
  }
  open() {
    Notification({
      title: '标题名称',
      message: '这是提示文案这是提示文案这是文案这是提示文案这是提示文案这是提示文案'
    });
  }

  open2() {
    Notification({
      title: '提示',
      message: '这是一条不会自动关闭的消息',
      duration: 0
    });
  }
  render() {
    return (
      <div>
        <div>this is list views {this.state.kk}</div>
        <Button onClick={this.goBack}  type="primary">goback</Button>
        <div>
          <Button plain={true} onClick={this.open.bind(this)}>可自动关闭</Button>
          <Button plain={true} onClick={this.open}>不会自动关闭</Button>
        </div>
      </div>
    )
  }
}
export default List
