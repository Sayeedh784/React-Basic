import React,{Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Setstat extends Component{


  constructor(){
    super()

    this.state ={
      name:"Sayeed"
    }
  }

  changeName(a){
    this.setState({name:a})
  }
  render(){
    return <h1>My name is {this.state.name}.<br/>
    <button className="btn btn-info" onClick={this.changeName.bind(this,"Noyon")}>Change Name</button>
    
    </h1>
  }

}
export default Setstat;

