import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
  getStudentData = ()=>{
    axios.get('http://localhost:3000/api1/students').then(
      response =>{ console.log('success',response)},
      error=>{console.log('failure')}
    )
  }
  getCarData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      response =>{ console.log('success',response)},
      error=>{console.log('failure')}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取数据</button>
        <button onClick={this.getCarData}>点我获取数据</button>
      </div>
    )
  }
}
