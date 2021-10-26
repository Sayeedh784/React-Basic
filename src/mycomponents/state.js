import React,{Component} from "react";


class Stat extends Component{

  constructor(){
    super()


    var obj={
      name:"Sayeed",
      age:24,
      agearray:["24","25","2"],
      weight:{
        class7:"45",
        class8:"48",
      }
    } 

    // this.state={
      // name:"Sayeed",
      // age:24
    // }
    this.state=obj
  }


  render(){
    return <h1>My name is {this.state.name}.<br/>
    And I am {this.state.agearray[0]} years old <br/>
    and my weight is {this.state.weight.class7} </h1>
  }

}
export default Stat;