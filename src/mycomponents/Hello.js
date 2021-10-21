import React from "react";


function Hello(props){

  function Dothis(a){
    alert(a)
  }

  return(

    <div>
      
      <h1> {props.name} is {props.age} years old</h1>
      <button onClick={Dothis.bind(this,"This is fuction para")}>Click me</button>
    </div>

    

  );



}
export default Hello;