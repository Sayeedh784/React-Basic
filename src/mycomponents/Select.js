import React, { Component } from 'react'

class Select extends Component {

  constructor(){
    super()
    this.state={
      city1:"Dhaka",
      city2:"Rajsahi",
      city3:"Barishal",
      city4:"Rangpur",
      
    }
  }

  onChangeHandler=()=>{
    
  }

  render() {
    return (
      <div>
        <select onChange={this.onChangeHandler} value={this.state.city2}>
          <option>{this.state.city1}</option>
          <option>{this.state.city2}</option>
          <option>{this.state.city3}</option>
          <option>{this.state.city4}</option>
          
        </select>
      </div>
    )
  }
}
export default Select;
