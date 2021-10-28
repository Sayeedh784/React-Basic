import React, { Component } from 'react'

class Text extends Component {

  constructor(){
    super()
    this.state={
      desc:"Insert some text.",
      userInput:""
    }
  }

  onchangeHandler=(event)=>{
    var mytext=event.target.value
    this.setState({userInput:mytext})
  }

  render() {
    return (
      <div>
        <textarea onChange={this.onchangeHandler} placeholder="enter yout message" />
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}
export default Text;
