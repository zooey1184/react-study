import React from 'react'
import Todo from './todo'
import Cut from './cut'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import List from '@/views/list'
const Home = ()=> {
  return (
    <div>
      <Todo/>
      <Cut/>
    </div>
  )
}

const App = ()=> {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/list' component={List}/>
      </Switch>
    </Router>
  )
}

export default App
