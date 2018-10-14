import React, {Component} from 'react'
import './login.less'
import login from '@/assets/logo.png'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      pwd: '',
      redirect: false
    }
    this.submitFn = this.submitFn.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }
  submitFn() {
    console.log(this.state);
    
  }
  handleChange(e) {
    let t = e.target
    let name = t.name
    let value = t.value
    this.setState({
      [name]: value
    });
  }
  handleChange2(e) {
    this.setState({pwd: e.target.value});
  }
  render() {
    if(this.state.redirect) {
      return <Redirect push path='/home/index'/>
    }else {
      return (
        <div className='login_page'>
          <div className='contain'>
            <img src={login} alt='login'/>
            <div className='login_pane'>
              <input name='phone' value={this.state.phone} placeholder='请输入用户名' onChange={this.handleChange}/>
              <input name='pwd' value={this.state.pwd}  placeholder='请输入密码' type='password' onChange={this.handleChange}/>
              <button onClick={this.submitFn} className='submit_btn'>
                submit
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Login