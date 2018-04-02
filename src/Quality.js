import React, { Component } from 'react';
import './Quality.css';
import './common.css';
import Nav from './Nav'

class Quality extends Component {
  render() {
    return (
       <div>
        <Nav />
        <div className={'other-header'}>
          <h1>Quality</h1>
          <div className={'center'}><h2>resin</h2></div>
          <div className={'card-inner'}>
            <p>We only use super sap eco friendly resin</p>
            <img className={'img'} src="https://storage.googleapis.com/blacktuna/epoxy.jpg" alt=""/>
          </div>
          <div className={'center'}><h2>glass</h2></div>
          <div className={'card-inner'}>
            <p>This perfect AF glass</p>
            <img className={'img'} src="https://storage.googleapis.com/blacktuna/glass.png" alt=""/>
          </div>
          <div className={'center'}><h2>attention to detail</h2></div>
          <div className={'card-inner'}>
            <p>We obsess over every detail</p>
            <img className={'img'} src="https://storage.googleapis.com/blacktuna/detail.jpg" alt=""/>
          </div>
        </div>
       </div>

    );
  }
}

export default Quality;
