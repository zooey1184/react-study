import React, {Component}  from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom' 
import notFound from '@/assets/notFound.png'
import Home from '@/container/index'
import Login from '@/views/login/index'
import './page.less'

class NotFound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      redirect: true
    })
  }
  
  render() {
    if(this.state.redirect) {
      return <Redirect push to="/home/index" />
    }else {
      return (
        <div className='notFound_page'>
          <img src={notFound} alt='404' />
          <button className='notFound btn' onClick={this.handleClick}>BACK</button>
        </div>
      )
    }
  }
}

const Page = ()=> (
  <Router>
    <Switch>
      <Route exact path='/home/:id' strict  component={Home}></Route>
      <Route exact path='/login' strict component={Login}></Route>
      <Route exact component={NotFound}></Route>
    </Switch>
  </Router>
)

export default Page