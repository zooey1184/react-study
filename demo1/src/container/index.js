import React from 'react'
import Todo from './todo'
import Cut from './cut'
import {Route, Switch, Redirect} from 'react-router-dom'
import List from '@/views/list'
import NavPane from '@/components/nav/navHeader.js'
import NavSide from '@/components/navSide/navSide.js'
import image from '@/assets/plante.png'

const Home = ()=> {
  return (
    <div>
      <Todo/>
      <Cut/>
    </div>
  )
}

const App = ()=> {
  console.log('hello');
  return (
    // <Router>
      <div>
        <Switch>
          <Route exact strict path='/home/index' component={Home}/>
          <Route exact strict path='/home/list' component={List}/>
        </Switch>
      </div>
    // </Router>
  )
}

const Contain = ()=> {
  if(window.localStorage.getItem('login') !== 'login') {
    return <Redirect push to="/login" />
  }else {
    return (
      <div>
        <div className="nav">
          <NavPane img={image} title="hello"/>
        </div>
        <div className="body">
          <div className='side'>
            <NavSide />
          </div>
          <div className='content'>
            <App />
          </div>
        </div>
      </div>
    )
  }
}

export default Contain
