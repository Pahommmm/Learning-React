import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
  search = async ()=>{
    //连续解构赋值+重命名
    const {keyWordElement:{value:keyWord}} = this

    //发送请求前通知List更新状态
    PubSub.publish('kinoW',{isFirst:false,isLoading:true})
    //使用axios发送网络请求
    /*
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        PubSub.publish('kinoW',{isLoading:false,users:response.data.items})
      },
      error =>{
        PubSub.publish('kinoW',{isLoading:false,err:error.message})
      }
    )
    */

    //使用fetch发送请求
    /* fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response =>{
        console.log("联系服务器成功")
        return response.json()
        PubSub.publish('kinoW',{isLoading:false,users:response.data.items})
      }
    ).then(
      response =>{
        console.log("获取数据成功",response)
      }
    ).catch(
      error =>{console.log(error)}
    ) */

    try {
      const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('kinoW',{isLoading:false,users:data.items})
    } catch (error) {
      console.log('failure to load data',error)
      PubSub.publish('kinoW',{isLoading:false,err:error})
    }
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
