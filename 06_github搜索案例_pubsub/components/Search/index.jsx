import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  search = ()=>{
    //连续解构赋值+重命名
    const {keyWordElement:{value:keyWord}} = this

    //发送请求前通知List更新状态
    PubSub.publish('kinoW',{isFirst:false,isLoading:true})
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        PubSub.publish('kinoW',{isLoading:false,users:response.data.items})
      },
      error =>{
        PubSub.publish('kinoW',{isLoading:false,err:error.message})
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={(c)=>{this.keyWordElement = c}} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
