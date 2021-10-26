import React,{Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Refresh extends Component{

  constructor(){
    super()
    this.refreshNow=this.refreshNow.bind(this);
  }
  refreshNow(){
    this.forceUpdate();
  }

  render(){
    return(
      <div>
        <h1>{Math.random()}</h1>
        <button className="btn btn-info" onClick={this.refreshNow}>Refresh Button</button>
      </div>
    )
  }
}
export default Refresh;
