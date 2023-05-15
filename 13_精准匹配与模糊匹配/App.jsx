import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Test from './Pages/Test'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
              <MyNavLink to='/test/a/b'>Test</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
                <Route path="/test" component={Test}/>
                {/* 
                严格匹配 exact关键字
                <Route exact path="/test" component={Test}/> 
                */}
              </Switch>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
/*
   

  */
