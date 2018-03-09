import React, { Component } from 'react';
import './Boards.css';
import Nav from './Nav'

class Boards extends Component {
  constructor(pros){
    super();
    this.state = {
      boards: [
        {
          name:'Root Beer Float',
          type:'Planing Hull',
          description: 'Planning hull with heavy channel throuhout',
          price:'$600'
        },
        {
          name:'Twin Fin Fish',
          type:'Fish',
          description: 'Free flowing twin fin that holds a bottom turn and snaps off the top',
          price:'$600'

        },
        {
          name:'Wizard Sleeve',
          type:'Mid Range',
          description: 'Wizards its way in',
          price:'$600'
        },
        {
          name:'Gun',
          type:'gun',
          description: 'For when you want to go to indo but bring a board',
          price: '$600'
        },
        {
          name:'Performance Shortboard',
          type:'Shortboard',
          description: 'With help from local shredders the X was born for the good days here at home',
          price:'$600'
        },
        {
          name:'Custom',
          type:'Your Design',
          description: 'Shaping something new is interesting. Let us make whats in your head',
          price: '$600'
        }
      ],
      cart:[]
    }
    this.handleAddBoardToCart=this.handleAddBoardToCart.bind(this)
  }
  handleAddBoardToCart(e){
    e.preventDefault();
    const { boards } = this.state;
    const { cart } = this.state;
    const index = parseInt(e.target.dataset.index);
    debugger;
    this.setState({
      cart: [
        ...cart,
        boards[index]
      ]
    })
  }
  boards(){
    return this.state.boards.map((each, index)=>{
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
          <h1 className="title">Black Tuna Surfboards</h1>
          <h2 className="subtitle">Favorite Shapes</h2>
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
