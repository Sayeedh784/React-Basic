import React,{ Component } from 'react'

class Welcome extends Component{

  doThisFromClass(a){
    alert(a)
  }
  
  render(){
    return <div>
      <h1>I am from {this.props.name} </h1>
      <button onClick={this.doThisFromClass.bind(this,"This is a class para")} >click from class</button>
    </div>
    
    
    
  }
    
}

export default Welcome;

