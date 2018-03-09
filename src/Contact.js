import React, { Component } from 'react';
import './Contact.css';
import './common.css';
import Nav from './Nav'

class Contact extends Component {
  render() {
    return (
       <div>
        <Nav />
        <div className={'other-header'}>
          <h1>Black Tuna Surfboards</h1>
          <h2>Halifax, Nova Scotia</h2>
          <h4>by Chris Mathers</h4>
        </div>
        <div>
          Contact
        </div>
       </div>

    );
  }
}

export default Contact;
