import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'

class Quality extends Component {
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
          Quality
        </div>
       </div>

    );
  }
}

export default Quality;
