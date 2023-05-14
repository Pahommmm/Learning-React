import React, { Children, Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  // const {Children} = this.props
  //使用自闭和标签，标签内容会作为一个属性添加到标签属性中 children
  render() {
    return (
        <NavLink activeClassName="demo" className="list-group-item" {...this.props}/>
        // <NavLink activeClassName="demo" className="list-group-item" {...this.props}>{Children}</NavLink>
    )
  }
}
