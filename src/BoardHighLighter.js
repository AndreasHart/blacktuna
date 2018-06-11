import React, { Component } from 'react';
import './Boards.css';
import Nav from './Nav'

class Boards extends Component {
  constructor(pros){
    super();
  }
  boards(){
    return this.props.boards.map((each, index)=>{
      return (
        <div key={index} data-index={index} className="card" onClick={this.handleAddBoardToCart}>
          <div>{each.name}</div>
          <div>{each.type}</div>
          <div>{each.description}</div>
          <div>{each.price}</div>
        </div>)
    })
  }
  render() {
    return (
       <div>
        <Nav offset={0} />
        <div className="container">
          <div className="board-container">
            {this.boards()}
          </div>
          <img />
        </div>
       </div>

    );
  }
}

export default Boards;
