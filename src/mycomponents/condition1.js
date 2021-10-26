import React,{Component} from "react";


class Condition1 extends Component{

  constructor(){
    super()
    this.state={
      login:true  
    }
  }

  render(){
    return(
      this.state.login?
      (
        <h1>I am 1st</h1> 
      ) : 
      (
        <h1>I am 2nd</h1>
      )
      
    )



    // if(this.state.login===true){
      // return (
        // <button type="">Logout</button>
      // )
    // }
    // else{
      // <button type="">Login now</button>
    // }
  }


}
export default Condition1;