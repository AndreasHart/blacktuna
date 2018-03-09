import React, { Component } from 'react';
import './Explore.css';
import './common.css';
import Nav from './Nav'

class Explore extends Component {
  render() {
    return (
       <div>
        <Nav />
        <div className={'other-header'}>
          <h1>Explore</h1>
          <h2>We like to mix proven with expiremental</h2>
          <h4>by Chris Mathers</h4>
          <div className={'container-explore'}>
            <div className={'card-explore'}>
              <p>A few of our adventures</p>
              <img className={'img-explore'} src="https://storage.googleapis.com/blacktuna/epoxy.jpg" alt=""/>
            </div>
            <div className={'card-explore'}>
              <p>A few of our adventures</p>
              <img className={'img-explore'} src="https://storage.googleapis.com/blacktuna/epoxy.jpg" alt=""/>
            </div>
            <div className={'card-explore'}>
              <p>A few of our adventures</p>
              <img className={'img-explore'} src="https://storage.googleapis.com/blacktuna/epoxy.jpg" alt=""/>
            </div>
            <div className={'card-explore'}>
              <p>A few of our adventures</p>
              <img className={'img-explore'} src="https://storage.googleapis.com/blacktuna/epoxy.jpg" alt=""/>
            </div>
          </div>
        </div>
        <div>
          Explore
        </div>
       </div>

    );
  }
}

export default Explore;
