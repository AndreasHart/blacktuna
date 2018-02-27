import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './Nav.css';
import { Sticky } from 'react-sticky';

class Nav extends Component {
  render() {
    return (
       <div>
        <Sticky topOffset={485}>
          {
            ({
              style,

              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => {
              return (
                <header className="nav" style={style} >
                  <div className="logo-container">
                    <Link to={'/'}>
                      <img className="logo" alt='' src='https://storage.googleapis.com/blacktuna/bt-logo.jpg' />
                    </Link >
                  </div>
                  <div className="anchors-container">
                    <Link to={'/about'} className="anchors">About</Link>
                    <Link to={'/boards'} className="anchors">Boards</Link>
                  </div>
                </header>
              )
            }
          }
        </Sticky>
       </div>

    );
  }
}

export default Nav;
