import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'

class Boards extends Component {
  constructor(pros){
    super();
    this.state = {
      boards: [
        {
          name:'Root Beer Float',
          type:'Planing Hull',
          description: 'Planning hull with heavy channel throuhout'
        }
      ]
    }
  }
  boards(){
    return this.state.boards.map(each=>{
      return (
        <div>
          <div>{each.name}</div>
          <div>{each.type}</div>
          <div>{each.description}</div>
        </div>)
    })
  }
  render() {
    return (
       <div>
        <Nav />
        <div>
          <h1>Black Tuna Surfboards</h1>
          <h2>Favorite Shaps</h2>
            {this.boards()}
          <img />
        </div>
       </div>

    );
  }
}

export default Boards;
