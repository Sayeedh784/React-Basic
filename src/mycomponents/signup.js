import React, { Component } from 'react'

class Signup extends Component {

  constructor(){
    super();
    this.state={
      fname:"",
      lname:"",
      email:"",
      mobile:"",

    }
  }

    onchangeHandler=(event)=>{
      var inputName=event.target.name;
      var inputValue = event.target.value;
      this.setState({[inputName]:inputValue});

      if(inputName === "fname"){
        var namePattern=/^([a-zA-Z]){2,30}$/;
        if(!namePattern.test(inputValue)){
          this.setState({fname:"This name is not valid"})
        }
      }
      if(inputName === "lname"){
        var namePattern=/^([a-zA-Z]){2,30}$/;
        if(!namePattern.test(inputValue)){
          this.setState({lname:"This name is not valid"})
        }
      }
      if(inputName === "email"){
        var emailpattern=/\S+@\S+\.\S+/;
        if(!emailpattern.test(inputValue)){
          this.setState({email:"Email is not valid"})
        }
      }
      if(inputName === "mobile"){
        if(!Number(inputValue)){
          this.setState({mobile:"Mobile no is not valid"})
        }
      }

    }

  

  render() {
    return (
      <div>
        <p>First Name={this.state.fname}</p>
        <p>Last Name={this.state.lname}</p>
        <p>Email={this.state.email}</p>
        <p>Mobile={this.state.mobile}</p>
        <form>
          <input onChange={this.onchangeHandler} name="fname" type="text" placeholder="First Name"></input><br/>
          <input onChange={this.onchangeHandler} name="lname" type="text" placeholder="Last Name"></input><br/>
          <input onChange={this.onchangeHandler} name="email" type="text" placeholder="Email"></input><br/>
          <input onChange={this.onchangeHandler} name="mobile" type="text" placeholder="Mobile"></input><br/>
          <input  name="submit" type="submit" value="Save"></input><br/>
        </form>
      </div>
    )
  }
}
export default Signup;
