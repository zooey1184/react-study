import React, {PureComponent} from 'react'

class NavHeader extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      text: '后台管理系统'
    }
  }
  render() {
    return (
      <div style={{height: '80px', background: '#ddd'}}>
        <h3>{this.state.text}</h3>
      </div>
    )
  }
}

export default NavHeader