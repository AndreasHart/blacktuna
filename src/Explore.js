import React, { Component } from 'react';
import './Explore.css';
import Nav from './Nav'

class Explore extends Component {
  render() {
    return (
       <div>
        <Nav />
        <div>
          <h1>Black Tuna Surfboards</h1>
          <h2>Halifax, Nova Scotia</h2>
          <h4>by Chris Mathers</h4>
        </div>
        <div>
          Explore
        </div>
       </div>

    );
  }
}

export default Explore;
