import React, { Component } from 'react'

class Form extends Component {

  constructor(){
    super()
    this.state={
      username:""
    }
  }

  onChagehandler=(event)=>{

    var myname=event.target.name
    var MyValue=event.target.value
    this.setState({[myname]:MyValue})

    // var newName=event.target.value;
    // this.setState({name:newName})
  }

  onSubmitHandler=()=>{
    alert(this.state.username)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <p>My First Form</p>
          <p>{this.state.username}</p>
          <input name="username" onChange={this.onChagehandler} type="text" placeholder="your name"></input><br/><br/>
          <input type="submit" value="Submit Now"></input>
        </form>
      </div>
    )
  }
}
export default Form;
