import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  
  state = {mouse:false}

  //鼠标移入，移出的事件回调
  handleMouse = (flag) =>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  //勾选，取消勾选某一个todo的回调
  handleOnChecked = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  //删除一个todo的回调
  handleDelete = (id)=>{
    if(window.confirm("确认删除吗")){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleOnChecked(id)}/>
            <span>{name}</span>
          </label>
          <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
        </li>
    )
  }
}
