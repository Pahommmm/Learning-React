import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

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
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> 
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link> */}
              <NavLink activeClassName="demo" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="demo" className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
              <Route path="/about" component={About}/>
              <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
/*
    1.明确好界面中的导航区。展示区
    2.导航区的a标签改为Link标签
      <Link className="list-group-item" to="/about">About</Link>
    3.展示区写Route标签进行路径的匹配
      <Route path="/about" component={About}/>
    4.<App>的最外层包裹了一个<BrowserRouter>或<HashRouter>

    路由组件和一般组件
      1.写法不同
      2.存放位置不同
      3.接收到的props不同
        一般组件：传递了生命旧能收到什么
        路由组件：接收到三个固定属性 
        history
        location
        match
  */
