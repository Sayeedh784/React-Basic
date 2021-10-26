import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reactDom from 'react-dom';


class Newdemo extends Component {

  myFun(){
    var container=document.getElementById("myId")
    var element=<h1>My Name is Noyon. And i am from react dom.</h1>
    var callback=function(){
      alert("Hi!! I am Callback.");
    }

    //reactDom.render(element,container,callback)
    reactDom.hydrate(element,container,callback)

  }


  render() {
    return (
      <div>
        <h1 id="myId">My name is sayeed</h1>
        <button className="btn btn-info" onClick={this.myFun}>Change</button>
      </div>
    )
  }
}
export default Newdemo;
