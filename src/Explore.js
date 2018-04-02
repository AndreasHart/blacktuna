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
          <h2>Nova Scotia is a playground</h2>
          <h4>Small collection of expirences you could have in Nova Scotia</h4>
          <div className={'container-explore'}>
            <div className={'card-explore'}>
              <p>Eastern Shore</p>
              <img className={'img-explore'} src="https://storage.googleapis.com/blacktuna/epoxy.jpg" alt=""/>
            </div>
            <div className={'card-explore'}>
              <p>Southern Shore</p>
              <img className={'img-explore'} src="https://storage.googleapis.com/blacktuna/epoxy.jpg" alt=""/>
            </div>
            <div className={'card-explore'}>
              <p>Cape Breton</p>
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
