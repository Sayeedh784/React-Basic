import React,{Component} from "react";
import reactDom from "react-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'



class Anotherdemo extends React.Component {

  changeimg(){
   var imgid=document.getElementById("imgid")
   reactDom.findDOMNode(imgid).src="https://media.istockphoto.com/photos/fruit-juice-picture-id155376375?k=20&m=155376375&s=612x612&w=0&h=xvxdLKu8FQHp0zxAyxD26Nq8MLLsWee7oN7cqJy9KT0="
  }

  render() { 
    return(
      <div>
        <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=" id="imgid"></img><br/><br/>
        <button onClick={this.changeimg} className="btn btn-success" >Change Image</button>
      </div>
    )
  }
}
export default Anotherdemo;