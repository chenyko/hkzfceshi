import React, { Component } from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './page/Home'
import List from './page/List'
import News from './page/News'
import Profile from './page/Profile'
import HkLaOut from './components/HkLaout'
import store from './store'
import {getCityNameAction} from './store/Actions'


export default class App extends Component {
  componentDidMount(){
    
   store.dispatch(getCityNameAction('广州市'))
  }
  render() {
    return (
      <div>
        <Router>
          <Route path='/' exact render={(props)=><HkLaOut><Home></Home></HkLaOut>}></Route>
          <Route path='/list' exact render={(props)=><HkLaOut><List></List></HkLaOut>}></Route>
          <Route path='/news' exact render={(props)=><HkLaOut><News></News></HkLaOut>}></Route>
          <Route path='/profile' exact render={(props)=><HkLaOut><Profile></Profile></HkLaOut>}></Route>
        </Router>
      </div>
    )
  }
}
