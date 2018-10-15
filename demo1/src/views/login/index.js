import React, {Component} from 'react'
import './login.less'
import login from '@/assets/logo.png'
import {Redirect} from 'react-router-dom'
import {Message} from 'element-react'

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
    this.open = this.open.bind(this)
  }
  open(state) {
    console.log(state)
    if(state==='success') {
      Message({
        message: '登陆成功',
        type: state
      });
    }else if(state==='warning') {
      Message({
        message: '用户名或密码不正确哦',
        type: state
      });
    }
    
  }
  submitFn() {
    if(this.state.pwd==='123456' && this.state.phone==='15960018047') {
      this.open('success')
      setTimeout(()=> {
        this.setState({
          redirect: true
        })
      }, 500)
    }else {
      this.open('warning')
    }
  }
  handleChange(e) {
    let t = e.target
    let name = t.name
    let value = t.value
    this.setState({
      [name]: value
    });
  }
  render() {
    if(this.state.redirect) {
      return <Redirect push to='/home/index'/>
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