import React, { Component } from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
class Footer extends Component {

  render(){
    return (
       <div className="container">
         <ParallaxBanner
             className="your-class"
             layers={[{
              image: 'https://storage.googleapis.com/blacktuna/tuna-couch.jpg',
              amount: .5,
              slowerScrollRate: false,
              }]}
               style={{
                   height: '400px',
               }}
             >

          </ParallaxBanner>
          <div className="box">
            <div> Black Tuna Surfboards</div>
            <div>West St. Halifax</div>
            <div>Nova Scotia, Canada</div>
            <Link className={'contact'} to={'/contact'}>Contact Us</Link>
          </div>
       </div>

    );
  }
}

export default Footer;
