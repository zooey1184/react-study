import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Menu} from 'element-react'

class NavSide extends Component {
  constructor (props) {
    super(props)
    this.state = {
      router: '/',
      redirect: false
    }
    this.handleRouter = this.handleRouter.bind(this)
  }
  handleRouter(i) {
    // this.setState({
    //   router: router
    // })
    console.log(i);
    
  }
  render() {
    if(this.state.redirect) {
      return <Redirect push path={this.state.router}/>
    }else {
      return (
        <div>
          <Menu defaultActive="2" className="el-menu-vertical-demo" onSelect={this.handleRouter}>
            <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
              <Menu.ItemGroup title="分组一">
                <Menu.Item index="1-1">选项1</Menu.Item>
                <Menu.Item index="1-2">选项2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="分组2">
                <Menu.Item index="1-3">选项3</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item index="2"><i className="el-icon-menu"></i>导航二</Menu.Item>
            <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item>
          </Menu>
        </div>
      )
    }
  }
}

export default NavSide