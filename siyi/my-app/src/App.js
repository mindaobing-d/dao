import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  state={
    value:"",
    val:""
  }
  render() {
    let {val,value}=this.state
    return (
      <div>
        <input type="text" onChange={this.chnange.bind(this)} value={value} placeholder="账号"/>
        <input type="text" onChange={this.chnange.bind(this)} value={val} placeholder="密码"/>
        <button onClick={this.add.bind(this)}>登入</button>
      </div>
    )
  }
  add(){
    let {val,value}=this.state
    axios.post("/api/add",{name:value,pass:val}).then(res=>{
      console.log(res)
    })
  }
  chnange(e){
    if(e.target.placeholder==="账号"){
      this.setState({
        value:e.target.value
      })
    }else{
      this.setState({
        val:e.target.value
      })
    }
  }
}
